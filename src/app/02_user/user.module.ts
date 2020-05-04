import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { UserService } from './services/user.service';

import { UserComponent } from './user.component';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { UserRoutingModule } from './user-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketconfirmComponent } from './ticketconfirm/ticketconfirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';




@NgModule({ 
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarModule,
    SidebarModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports:[
    UserComponent
  
  ],
  declarations: [
    UserComponent,
    UserTicketListComponent,
    AddNewTicketComponent,
    DashboardComponent,
    TicketDetailsComponent,
    TicketconfirmComponent,
    EditTicketComponent
      
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
