import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { LoginService } from './services/login.service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule 
  ],
  exports:[
    LoginComponent 
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent,
    RegistrationConfirmComponent
  ],
  providers:[
    LoginService,
    DatePipe
  ]
})
export class LoginModule { }
