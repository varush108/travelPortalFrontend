import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { tickets } from 'src/app/models/tickets.interface';
import { type } from 'src/app/models/type.interface';
import { details } from 'src/app/models/details.interface';

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

  ticket: tickets;
  type: type;

  details:details;


  ngOnInit() {

    this.routeActivate.params.subscribe(params => {
      this.details = JSON.parse(params['details']);
    });
  }

}
