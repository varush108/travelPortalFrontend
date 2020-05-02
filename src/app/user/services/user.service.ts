import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoronaDetails } from 'src/app/models/coronaDetails';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getTickets(id : string) {
    return this.http.get(`http://localhost:8081/travelApi/v1/users/${id}`);
  }

  getTicketById(id: string) {
    return this.http.get(`http://localhost:8081/travelApi/v1/tickets/${id}`);
  }

  getCoronaUpdates(){
    let date = new Date();
    let to = date.toISOString().substr(0,10);
    let date1 = new Date();
    date1.setDate(date1.getDate() - 30);
    
    let from = date1.toISOString().substr(0,10);
    console.log(from);
    return this.http.get<CoronaDetails[]>(`https://api.covid19api.com/country/india/status/confirmed?from=${from}&to=${to}`);
  }
}