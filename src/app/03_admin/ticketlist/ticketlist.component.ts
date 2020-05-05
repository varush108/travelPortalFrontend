import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.interface';
import { tickets } from 'src/app/models/tickets.interface';
import { UserService } from 'src/app/02_user/services/user.service';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';


@Component({
  selector: 'app-ticketlist',
  templateUrl: 'ticketlist.component.html',
  styleUrls: ['ticketlist.component.css']
})
export class TicketlistComponent {
  Tickets: tickets[];
  ticketDetails: ticketDetails[];
  p: number = 1;
  constructor(
    private router: Router,
    private userservice: UserService
  ) {
  }

  ngOnInit() {

    this.userservice.getTickets()
      .subscribe((tickets: tickets[]) => {
        this.Tickets = tickets;
      })
    console.log(this.Tickets);
  }
  onTextInput(text: string) {
    console.log(text);
  }
  onOptionsSelected(value: string) {
    console.log(value);
  }
  setFilterkey(value: string) {
    keyword = value;
  }
  getDetails(id) {
    this.router.navigate(["/adminticketdetails", JSON.stringify(id)]);
  }
}
export var keyword: string;