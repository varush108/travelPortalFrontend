import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { UserRegister } from 'src/app/models/userRegister';
import { LoginService } from '../services/login.service.service';

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.css']
})
export class RegistrationConfirmComponent implements OnInit {

  user:UserRegister;

  constructor(private loginService : LoginService,
    private router : Router) { }

  ngOnInit() {
    this.user = {
      id : this.loginService.signUpUser.id,
      businessUnitId :this.loginService.signUpUser.businessUnitId,
      firstName : this.loginService.signUpUser.firstName,
      lastName:this.loginService.signUpUser.lastName,
      address : this.loginService.signUpUser.address,
      email : this.loginService.signUpUser.email,
      telephone : this.loginService.signUpUser.telephone,
      title : this.loginService.signUpUser.title,
      created_on :this.loginService.signUpUser.created_on

    }
  }

  print(){
  
    const printContent = document.getElementById("confirmCard");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.write('<style>#confirmCard{text:align:center}</style>');
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

}
