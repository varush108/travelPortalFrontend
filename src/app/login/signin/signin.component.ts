import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  errorMessage: string;
  email: string;

  password:string;

  onEmailInput(email: string) {
    this.email = email;
  }

  onPasswordInput(password : string){
    this.password=password; 
  }
  constructor(
    private loginservice: LoginService
  ) { }

 

  onUserLogin(){
    this.getUser(this.email);
  }

  onAdminLogin(){
    this.getAdmin(this.email);
  }

  private getUser(email:string) {
    this.loginservice.getUserByEmail(email)
    .subscribe(responseData => {
      if(responseData!=null){
        if(this.password===responseData['password'])
        {
          this.errorMessage="";
          alert("login successful")
        }
        else{
          this.errorMessage="Password not correct";
        }
      }else{
        this.errorMessage="Username not correct";
      }
    });
  }

  private getAdmin(email:string) {
    this.loginservice.getAdminByEmail(email)
    .subscribe(responseData => {
      if(responseData!=null){
        if(this.password===responseData['user_id']['password'])
        {
          this.errorMessage="";
          alert("login successful")
        }
        else{
          this.errorMessage="Password not correct";
        }
      }else{
        this.errorMessage="Username not correct";
      }
    });
  }

}
