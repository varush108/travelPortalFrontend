import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}
  getUserByEmail(email:string) {
    return this.http.get(`http://localhost:8081/travelApi/v1/userByEmail?email=${email}`); 
  }

  getAdminByEmail(email:string){
    return this.http.get(`http://localhost:8081/travelApi/v1/adminByEmail?email=${email}`); 
  }


}
