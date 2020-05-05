import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { ticketDetails } from '../models/ticketDetails.interface';
import { tickets } from '../models/tickets.interface';
import { Priority } from '../models/details.interface';

@Pipe({ name: 'sortBy' })


export class SortByPipe implements PipeTransform {

  Tickets: tickets[];
  ticketDetails: ticketDetails[];

  transform(Tickets: tickets[], order = '', column: string = ''): tickets[] {

    //if (order === '') { return Tickets; }
    if ((column === '') || (column === 'date')) {
      column = "created_on";
      return orderBy(Tickets, [column], [order]);
    }
    else {
      Tickets.sort((a: any, b: any) => {
        if (Priority[a.ticketDetails[0].details.priority.toUpperCase()] < Priority[b.ticketDetails[0].details.priority.toUpperCase()]) {
          return -1;
        } else if (Priority[a.ticketDetails[0].details.priority.toUpperCase()] > Priority[b.ticketDetails[0].details.priority.toUpperCase()]) {
          return 1;
        } else {
          return 0;
        }
      });
      return Tickets;
    }
  }
}