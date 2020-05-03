import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { SigninComponent } from '../login/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketconfirmComponent } from './ticketconfirm/ticketconfirm.component';

const routes: Routes = [
  { path: 'mytickets', component: UserTicketListComponent },
  { path: 'signin', component: SigninComponent },
  {path :'dashboard',component:DashboardComponent},
  { path : 'new',component:AddNewTicketComponent},
  { path : 'details', component : TicketDetailsComponent},
  { path : 'ticketconfirm/:details', component : TicketconfirmComponent}
];
 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {

}
