import { ticketDetails } from './ticketDetails.interface';
import { details } from './details.interface';

export interface NewTicket {
        id:BigInteger,
        type:{
          id:number,
          name:string
        }
        details:details
      
}
