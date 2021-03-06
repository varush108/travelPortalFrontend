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

    this.ticket =  this.userService.selectedTicket;
    console.log(this.ticket);
    this.details=this.ticket.details;
    this.userService.getTicketTypeById(this.ticket.type.id).subscribe((response)=>{
      this.ticket.type.name = response.name;
    })
  }
 
  onEdit(){
    this.router.navigate(['/editTicket'])
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

  print(){
  
    const printContent = document.getElementById("confirmCard");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.write('<style>#confirmCard{text:align:center}</style>');
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

}
