import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tickets } from 'src/app/models/tickets.interface';
import { UserService } from '../services/user.service';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTicket } from 'src/app/models/newTicket';
import { orderBy } from 'lodash';
import { pluck, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {


  id: string;
  Ticket: tickets;
  ticketDetails: ticketDetails[];
  editTicket : NewTicket;
  t : string = '';
  constructor(
    private router: Router,
    private userservice: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        pluck('id'),
        tap((id) => {
          this.id = id;
        }),
        switchMap((id) => {
          console.log('caling ticketById: ', id);
          return this.userservice.getTicketById(id);
        })
      ).subscribe((ticket: any) => {
        console.log('result: ', ticket);
        this.Ticket = ticket;
        this.ticketDetails = this.sortDetails(ticket.ticketDetails);
        this.editTicket = {
          id: parseInt(this.id, 10),
          type: {
            id: parseInt(ticket.type.id, 10),
            name: ''
          },
          details: ticket.ticketDetails[0].details
        }
      });
    
  }
  onEdit(){
    console.log(this.editTicket);
    this.editTicket.details = this.Ticket.ticketDetails[0].details
    this.editTicket.details = this.Ticket.ticketDetails[0].details
    this.userservice.selectedTicket = this.editTicket;
    if(this.userservice.selectedTicket.details.status.toLowerCase()=="done" || this.userservice.selectedTicket.details.status=="In process"){
      alert("This ticket has been marked as "+this.userservice.selectedTicket.details.status+"<br>You cannot edit this ticket");
    } else {
    this.router.navigate(['/editTicket'])
    }
  }
 
  sortDetails(detail : ticketDetails[]) {
    return orderBy(detail, 'id' , 'desc');
  }
  getFileName(uri:string){
    return decodeURIComponent(uri.split('/').pop())
  }
  backToHome() {
    this.router.navigateByUrl("/mytickets");
  }

}