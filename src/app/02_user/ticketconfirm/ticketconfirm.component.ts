import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { tickets } from 'src/app/models/tickets.interface';
import { type } from 'src/app/models/type.interface';
import { details } from 'src/app/models/details.interface';
import { NewTicket } from 'src/app/models/newTicket';
import { LoginService } from 'src/app/01_login/services/login.service.service';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ticketconfirm',
  templateUrl: 'ticketconfirm.component.html',
  styleUrls: ['ticketconfirm.component.css']
})
export class TicketconfirmComponent implements OnInit {
  constructor(
    private router: Router,
    private routeActivate : ActivatedRoute,
    private sessionService :SessionService,
    private loginService:LoginService,
    private userService:UserService
  ) { }

  details:details;
  ticket:NewTicket

  countryInfo: any[] = [];


  ngOnInit() {

    this.getCountries();

    this.routeActivate.params.subscribe(params => {
      this.ticket= JSON.parse(params['details']);
    });
    console.log(this.ticket);
    this.details=this.ticket.details;
    this.userService.getTicketTypeById(this.ticket.type.id).subscribe((response)=>{
      this.ticket.type.name = response.name;
    })
  }
 
  onEdit(){
    this.router.navigate(['/editTicket',JSON.stringify(this.ticket)])
  }

  getCountries(){
    this.loginService.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

}
