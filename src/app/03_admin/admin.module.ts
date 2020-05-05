import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminTicketDetailsComponent } from './adminticketdetails/adminticketdetails.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { NavbarModule } from '../02_user/navbar/navbar.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { SortByPipe } from './sortby.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NavbarModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    TicketlistComponent,
    AdminTicketDetailsComponent,

  ],
  declarations: [
    AdminComponent,
    TicketlistComponent,
    AdminTicketDetailsComponent,
    FilterPipe,
    SortByPipe
  ],
  providers: [
  ]
})
export class AdminModule { }
