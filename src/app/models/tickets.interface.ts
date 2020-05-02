import { ticketDetails } from './ticketDetails.interface';
import { type } from './type.interface';

export interface tickets{
    id:BigInteger;
    type:type;
    created_on:string;
    ticketDetails:ticketDetails[];
}