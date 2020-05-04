import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.interface';
import { UserService } from '../02_user/services/user.service';
import { LoginService } from '../01_login/services/login.service.service';
import { ticketDetails } from '../models/ticketDetails.interface';
import { tickets } from '../models/tickets.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

constructor(private Service :LoginService) { }

  getUserSessionDetails(){  
    let user:user;
    user = JSON.parse(localStorage.getItem('user'))
    return user;
  }

  setUserSessionDetails(user:user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  updateSessionUserDetails(){
    let user:user = this.getUserSessionDetails();
    this.Service.getUserByEmail(user.email).subscribe((response)=>{
      user = response;
      user.tickets.sort((a:tickets,b:tickets):number=>{
        if(a.id>b.id){
          return -1
        }
        if(a.id<b.id){
          return 1
        }
        else{
          return 0;
        }
      })
      user.tickets.forEach((ticket)=>{
        
        ticket.ticketDetails.sort((a:ticketDetails,b:ticketDetails):number=>{
          if(a.id>b.id){
            return -1
          }
          if(a.id<b.id){
            return 1
          }
          else{
            return 0;
          }
        })

      })
      this.setUserSessionDetails(user);
    }
    )

  }



}
