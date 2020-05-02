
import { details } from './details.interface';

export interface ticketDetails{
    id:BigInteger;
    details:details;
    comments:string;
    attachements:string[];
    user:string;
    createdOn:string;
    modified_on:string;
}