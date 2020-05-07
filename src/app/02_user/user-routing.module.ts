import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { SigninComponent } from '../01_login/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketconfirmComponent } from './ticketconfirm/ticketconfirm.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { AuthGuardService } from '../services/AuthGuard.service';

const routes: Routes = [
  { path: 'mytickets', component: UserTicketListComponent ,canActivate: [AuthGuardService]},
  { path: 'signin', component: SigninComponent },
  { path :'dashboard',component:DashboardComponent ,canActivate: [AuthGuardService] },
  { path : 'new',component:AddNewTicketComponent ,canActivate: [AuthGuardService]},
  { path : 'details/:id', component : TicketDetailsComponent ,canActivate: [AuthGuardService]},
  { path : 'ticketconfirm/:details', component : TicketconfirmComponent ,canActivate: [AuthGuardService]},
  { path : 'editTicket/:details', component : EditTicketComponent ,canActivate: [AuthGuardService]},
 
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
