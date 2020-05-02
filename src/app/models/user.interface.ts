import { tickets } from './tickets.interface';
import { address } from './address.interface';

export interface user {
    id:BigInteger;
    firstName:string;
    lastName:string;
    title:string;
    email:string;
    telephone:string;
    password:string;
    businessUnitId:string;
    tickets:tickets[];
    created_on:string;
    modified_on: string;
    modified_by: bigint;
    address: address;
  }