import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoronaDetails } from 'src/app/models/coronaDetails';
import { Countries } from 'src/app/models/countries';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get(`http://localhost:8081/travelApi/v1/tickets`);
  }

  getTicketById(id: string) {
    return this.http.get(`http://localhost:8081/travelApi/v1/tickets/${id}`);
  }

  getTicketTypeById(id: number|string) {
    return this.http.get<{id:number,name:string,templateId:number}>(`http://localhost:8081/travelApi/v1/ticketType/${id}`);
  }

  getTicketTypes(){
    return this.http.get<{id:BigInteger,name:string}[]>(`http://localhost:8081/travelApi/v1/ticketType`);
  }
 

  getCoronaUpdates(country:string){
    let date = new Date();
    let to = date.toISOString().substr(0,10);
    let date1 = new Date();
    date1.setDate(date1.getDate() - 30);
    
    let from = date1.toISOString().substr(0,10);
    console.log(from);
    return this.http.get<CoronaDetails[]>(`https://api.covid19api.com/country/${country}/status/confirmed?from=${from}&to=${to}`);
  }

  getCountries(){
    return this.http.get<Countries[]>(`https://api.covid19api.com/countries`);
  }

  saveTicket(ticket){
    return this.http.post(`http://localhost:8081/travelApi/v1/tickets`,ticket,{observe: 'response'});
  }

  saveTicketDetails(ticket){
    return this.http.post(`http://localhost:8081/travelApi/v1/ticketDetails`,ticket,{observe: 'response'});
  }
}