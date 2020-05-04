import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from 'src/app/models/userRegister';
import { stringify } from 'querystring';
import { user } from 'src/app/models/user.interface';
import { Admin } from 'src/app/models/admin';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  constructor(private http:HttpClient) { }

  allCountries(): Observable<any>{
    return this.http.get(this.url);
  }
  
  getUserByEmail(email:string) {
    return this.http.get<user>(`http://localhost:8081/travelApi/v1/userByEmail?email=${email}`); 
  }

  getAllBusinessUnits(){
    return this.http.get(`http://localhost:8081/travelApi/v1/BusinessUnits`);

  }

  getAdminByEmail(email:string){
    return this.http.get<Admin>(`http://localhost:8081/travelApi/v1/adminByEmail?email=${email}`); 
  }

  registerUser(user : UserRegister){

    return this.http.post('http://localhost:8081/travelApi/v1/users',user,{observe: 'response'})

  }

  sendConformationMail(username:string,password:string){
    
    let subject = "Registration successful"  ; 
    let text = "<h1> You have successfully registered to Nagarro travel portal</h1>"+
          "<br> Your credentials are mentioned below. Please do not share it with anyone"+
          "<br><b>Username </b>: "+username+
          "<br><b>Password </b>: "+password

    subject = encodeURIComponent(subject); 
    text = encodeURIComponent(text)


    return this.http.get(`http://localhost:8081/travelApi/v1/send-mail?email=${username}&subject=${subject}&text=${text}`); 
    
  }

  sendForgotPasswordMail(username:string,password:string){
    
    let subject = "Forgot Password request on Nagarro Travel"  ; 
    let text = "<h1> You have requested for credentials to Nagarro travel portal</h1>"+
          "<br> Your credentials are mentioned below. Please do not share it with anyone"+
          "<br><b>Username </b>: "+username+
          "<br><b>Password </b>: "+password

    subject = encodeURIComponent(subject); 
    text = encodeURIComponent(text)


    return this.http.get(`http://localhost:8081/travelApi/v1/send-mail?email=${username}&subject=${subject}&text=${text}`); 
    
  }


}
