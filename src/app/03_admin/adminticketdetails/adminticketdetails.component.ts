import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/02_user/services/user.service';
import { tickets } from 'src/app/models/tickets.interface';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';

@Component({
  selector: 'app-adminticketdetails',
  templateUrl: 'adminticketdetails.component.html',
  styleUrls: ['adminticketdetails.component.css']
})
export class AdminTicketDetailsComponent {
  Ticket: tickets;
  ticketDetails: ticketDetails[];
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = JSON.parse(params['id']);
    });
    this.userservice.getTicketById(this.id)
      .subscribe((ticket: tickets) => {
        this.Ticket = ticket;
        this.ticketDetails = ticket.ticketDetails;
        console.log(this.Ticket);
      })
  }
  backToHome() {
    this.router.navigateByUrl('/ticketlist')
  }
}