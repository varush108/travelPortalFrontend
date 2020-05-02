import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CoronaDetails } from 'src/app/models/coronaDetails';
import * as CanvasJS from '../../../app/canvasjs.min';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  disabled:boolean=false;
  chart;
  coronaChart:Array<{y,label}> = []
  constructor( private service: UserService,
    private router :Router) { }

  ngOnInit() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Covid19 cases in last 30 days in india"
      },
      data: [{
        type: "column",
        dataPoints: this.coronaChart
      }]
    }); 
  }

  renderChart(){
    this.disabled=true;
    
    this.coronaChart.length=0;
    this.service.getCoronaUpdates().subscribe((corona:CoronaDetails[])=>{
      corona.forEach((key)=>{
        this.coronaChart.push({y:key.Cases,label:key.Date.substr(0,10)});
      }) 
      console.log(this.coronaChart);
      this.chart.render();
      this.disabled=false;
    });
    
  }

  signOut() { 
    this.router.navigateByUrl('/signin');
  }

}
