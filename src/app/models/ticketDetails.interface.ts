
import { details } from './details.interface';

export interface ticketDetails{
    id:BigInteger | string;
    details:details;
    comments?:string;
    attachements?:string[];
    user:string | {
        id:BigInteger
    };
    ticket?:{
        id:BigInteger |number
    }
    createdOn?:string;
    modified_on?:string;
}