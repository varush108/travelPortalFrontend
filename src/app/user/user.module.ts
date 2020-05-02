import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';

import { UserComponent } from './user.component';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { UserRoutingModule } from './user-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({ 
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule
  ],
  exports:[
    UserComponent
  
  ],
  declarations: [
    UserComponent,
    UserTicketListComponent,
    AddNewTicketComponent,
    DashboardComponent
  
    
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
