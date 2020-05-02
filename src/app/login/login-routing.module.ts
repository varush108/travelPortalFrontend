import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path:'registrationConfirm',component:RegistrationConfirmComponent},
  
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
 
];
 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {

}
