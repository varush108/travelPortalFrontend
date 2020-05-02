import { ticketDetails } from './ticketDetails.interface';

export interface tickets{
    id:BigInteger;
    created_on:string;
    ticketDetails:ticketDetails[];
}