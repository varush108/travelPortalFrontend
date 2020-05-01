import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { LoginService } from './services/login.service.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    LoginComponent 
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
