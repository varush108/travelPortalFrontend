import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from '../01_login/edit-user/edit-user.component';
import { RegistrationConfirmComponent } from '../01_login/registration-confirm/registration-confirm.component';
import { LoginService } from '../01_login/services/login.service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedInService implements CanActivate{

constructor(private sessionService :SessionService,
  private loginService :LoginService,
  private router :Router) { }


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

  if(this.sessionService.getUserSessionDetails()==null){
    if(route.component === EditUserComponent || route.component === RegistrationConfirmComponent ){
      if(this.loginService.signUpUser==null){
        this.router.navigate(['/signup']);
        return false;
      }
      else{
        return true;
      }
    }
   
    return true
  }
  else{
    this.router.navigate(['/dashboard']);
    return false;

  }
}

}
