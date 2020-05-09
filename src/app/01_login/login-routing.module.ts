import { NgModule, Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';
import { AuthGuardLoggedInService } from '../services/AuthGuardLoggedIn.service';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent ,canActivate: [AuthGuardLoggedInService],
      children:[
        { path: '**', redirectTo: '/signup', pathMatch: 'full' },

      ]},
  { path: 'editUser', component: EditUserComponent ,canActivate: [AuthGuardLoggedInService]},
  { path: 'signin', component: SigninComponent ,canActivate: [AuthGuardLoggedInService]},
  { path: 'forgot', component: ForgotPasswordComponent  ,canActivate: [AuthGuardLoggedInService]},
  { path:'registrationConfirm',component:RegistrationConfirmComponent ,canActivate: [AuthGuardLoggedInService]} ,
  
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  



 
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
