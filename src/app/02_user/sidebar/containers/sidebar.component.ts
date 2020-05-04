import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  constructor(
    private router : Router
  ){}
  
}