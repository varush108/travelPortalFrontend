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
export class AuthGuardService implements CanActivate{

constructor(private sessionService :SessionService,
  private loginService :LoginService,
  private router :Router) { }


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
  
  if(this.sessionService.getUserSessionDetails()!=null){
    
    return true;
  }
  else{
    this.router.navigate(['/signin']);
    return false;
  }
}

}
