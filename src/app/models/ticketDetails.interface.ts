import { attachements } from './attachements.interface';

export interface ticketDetails{
    id:BigInteger;
    comments:string;
    user:string;
    createdOn:string;
    modified_on:string;
    attachements:attachements[];
}