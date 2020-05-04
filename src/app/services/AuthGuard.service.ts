import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

constructor(private sessionService :SessionService,
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
