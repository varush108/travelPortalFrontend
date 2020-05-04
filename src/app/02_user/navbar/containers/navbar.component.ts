import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(
    private router : Router
  ){}
   
  signOut() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/signin');
  }
}