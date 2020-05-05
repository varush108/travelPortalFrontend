import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../01_login/signin/signin.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { AdminTicketDetailsComponent } from './adminticketdetails/adminticketdetails.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'ticketlist', component: TicketlistComponent },
  { path: 'adminticketdetails/:id', component: AdminTicketDetailsComponent }
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
export class AdminRoutingModule {

}
