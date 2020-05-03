import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { tickets } from 'src/app/models/tickets.interface';
import { type } from 'src/app/models/type.interface';
import { details } from 'src/app/models/details.interface';
import { NewTicket } from 'src/app/models/newTicket';

@Component({
  selector: 'app-ticketconfirm',
  templateUrl: 'ticketconfirm.component.html',
  styleUrls: ['ticketconfirm.component.css']
})
export class TicketconfirmComponent implements OnInit {
  constructor(
    private router: Router,
    private routeActivate : ActivatedRoute
  ) { }

  details:details;
  ticket:NewTicket


  ngOnInit() {

    this.routeActivate.params.subscribe(params => {
      this.ticket= JSON.parse(params['details']);
    });
    console.log(this.ticket);
    this.details=this.ticket.details;
  }
 
  onEdit(){
    this.router.navigate(['/editTicket',JSON.stringify(this.ticket)])
  }

}
