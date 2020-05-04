import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { UserRegister } from 'src/app/models/userRegister';

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.css']
})
export class RegistrationConfirmComponent implements OnInit {

  user:UserRegister;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userRegister'));
  }

}
