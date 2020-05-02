import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service.service';
import { user } from 'src/app/models/user.interface';
import { Admin } from 'src/app/models/admin';

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
    .subscribe((user : user) => {
      if(user!=null){
        console.log(user);
        if(this.password===user.password)
        {
          localStorage.setItem("user",JSON.stringify(user));

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
    .subscribe((user : Admin) => {
      if(user!=null){ 
        console.log(user);
        if(this.password===user.user_id.password)
        {
          localStorage.setItem("user",JSON.stringify(user.user_id));

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
