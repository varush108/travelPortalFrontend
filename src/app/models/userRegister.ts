import { address } from './address.interface';

export interface UserRegister {
    firstName:string;
    lastName:string;
    title:string;
    email:string;
    telephone:string;
    businessUnitId:{
        id:number;
    
    };
    address:address;
    created_on:string;
}
