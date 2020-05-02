import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from 'src/app/models/userRegister';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}
  getUserByEmail(email:string) {
    return this.http.get(`http://localhost:8081/travelApi/v1/userByEmail?email=${email}`); 
  }

  getAllBusinessUnits(){
    return this.http.get(`http://localhost:8081/travelApi/v1/BusinessUnits`);

  }

  getAdminByEmail(email:string){
    return this.http.get(`http://localhost:8081/travelApi/v1/adminByEmail?email=${email}`); 
  }

  registerUser(user : UserRegister){

    return this.http.post('http://localhost:8081/travelApi/v1/users',user)

  }


}
