import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service.service';
import { user } from 'src/app/models/user.interface';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(  private loginservice: LoginService) { }

  ngOnInit() {
  }

  //properties
  email: string;
  errorMessage : string;
  successMessage : string;

  //methods
  onEmailInput(email: string) {
    this.email = email; 
  }

  onForgotPassword(){
    this.getUser(this.email);

  }

  private getUser(email:string) {
    this.loginservice.getUserByEmail(email)
    .subscribe((user : user) => {
      if(user!=null){
        this.loginservice.sendForgotPasswordMail(user.email,user.password).subscribe();
        this.successMessage = "Your credentials have been mailed to you. Please check your email";
        this.errorMessage="";        
      }else{
        this.errorMessage="No user account exists with that email";
        this.successMessage="";
      }
    });
  }
  

}
