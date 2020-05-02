import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { SigninComponent } from '../login/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'mytickets', component: UserTicketListComponent },
  { path: 'signin', component: SigninComponent },
  {path :'dashboard',component:DashboardComponent}
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
