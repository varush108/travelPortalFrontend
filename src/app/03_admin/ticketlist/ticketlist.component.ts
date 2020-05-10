import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.interface';
import { tickets } from 'src/app/models/tickets.interface';
import { UserService } from 'src/app/02_user/services/user.service';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { orderBy } from 'lodash';


@Component({
  selector: 'app-ticketlist',
  templateUrl: 'ticketlist.component.html',
  styleUrls: ['ticketlist.component.css']
})
export class TicketlistComponent {
  Tickets: tickets[];
  ticketDetails: ticketDetails[];
  p: number = 1;
  done:boolean=false;
  canRender:boolean=false;
  constructor(
    private router: Router,
    private userservice: UserService
  ) {
  }

  ngOnInit() {

    this.userservice.getTickets()
      .subscribe((tickets: tickets[]) => {
        this.Tickets = tickets;
        
        this.Tickets.forEach((t)=>{
          t.ticketDetails = this.sortDetails(t.ticketDetails);
        })
        
        this.Tickets = this.Tickets.filter(it => {
          if(this.done==false){
          return !it.ticketDetails[0].details.status.toLowerCase().match('done'); 
          }
          else{
            return it.ticketDetails[0].details.status.toLowerCase().match('done'); 
          }
        });
        this.canRender=true;
        console.log(this.Tickets);
      })
    
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

  sortDetails(detail : ticketDetails[]) {
    return orderBy(detail, 'id' , 'desc');
  }

  onViewResolved(){
    this.done=true;
    this.filterTickets();
  }

  onViewAll(){
    this.done=false;
    this.filterTickets();
  }

  filterTickets(){
    this.userservice.getTickets()
    .subscribe((tickets: tickets[]) => {
      this.Tickets = tickets;
      
      this.Tickets.forEach((t)=>{
        t.ticketDetails = this.sortDetails(t.ticketDetails);
      })
      
      this.Tickets = this.Tickets.filter(it => {
        if(this.done==false){
        return !it.ticketDetails[0].details.status.toLowerCase().match('done'); 
        }
        else{
          return it.ticketDetails[0].details.status.toLowerCase().match('done'); 
        }
      });
      this.canRender=true;
      console.log(this.Tickets);
    });
    console.log(this.Tickets);
  }
}
export var keyword: string;