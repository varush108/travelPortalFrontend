import { ticketDetails } from './ticketDetails.interface';

export interface NewTicket {
    
        ticket:{
          user:{
            id:BigInteger ;
          },
          type:{
            id:bigint
    
          }
        },
        ticketDetails:ticketDetails
      
}
