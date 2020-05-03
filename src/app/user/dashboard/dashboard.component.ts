import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CoronaDetails } from 'src/app/models/coronaDetails';
import * as CanvasJS from '../../canvasjs.min';
import { Router } from '@angular/router';
import { Countries } from 'src/app/models/countries';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  disabled: boolean = false;
  chart;
  coronaChart: Array<{ y; label }> = [];
  countries: Countries[];
  countryName: string;
  countrySlug: string;

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.service.getCountries().subscribe((countries: Countries[]) => {
      this.countries = countries;
      this.countries.sort((a: Countries, b: Countries): number => {
        if (a.Country < b.Country) {
          return -1;
        }
        if (a.Country > b.Country) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }

  updateSelectedCountry(country: string, slug: string) {
    this.countryName = country;
    this.countrySlug = slug;
  }

  renderChart() {
    this.disabled = true;
    this.chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Covid19 cases in last 30 days in ' + this.countryName,
      },
      data: [
        {
          type: 'column',
          dataPoints: this.coronaChart,
        },
      ],
    });
    this.coronaChart.length = 0;
    this.service
      .getCoronaUpdates(this.countrySlug)
      .subscribe((corona: CoronaDetails[]) => {
        corona.forEach((key) => {
          this.coronaChart.push({
            y: key.Cases,
            label: key.Date.substr(0, 10),
          });
        });
        if (this.coronaChart.length == 0) {
          alert('Sorry!! Data for this country is not available right now.');
        } else {
          this.coronaChart.pop();
          this.chart.render();
          this.disabled = false;
        }
      });
  }

  signOut() {
    this.router.navigateByUrl('/signin');
  }
}
