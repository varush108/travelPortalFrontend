import { ticketDetails } from './ticketDetails.interface';
import { details } from './details.interface';

export interface NewTicket {
        id:number,
        type:{
          id:number,
          name:string
        }
        details:details
      
}
