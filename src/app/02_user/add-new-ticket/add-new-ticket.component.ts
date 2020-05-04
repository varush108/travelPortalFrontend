import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { user } from 'src/app/models/user.interface';
import { NewTicket } from 'src/app/models/newTicket';
import { SessionService } from 'src/app/services/session.service';
import { LoginService } from 'src/app/01_login/services/login.service.service';

@Component({
  selector: 'app-add-new-ticket',
  templateUrl: './add-new-ticket.component.html',
  styleUrls: ['./add-new-ticket.component.css']
})

export class AddNewTicketComponent {

  regForm : FormGroup;
  errorMessage:string;
  user:user;
  ticketTypes:{id:BigInteger,name:string}[];
 
  countryInfo: any[] = [];

  constructor(
    private service :UserService,
    private router: Router,
    private sessionService :SessionService,
    private loginService:LoginService) { }
  
  typeControl:FormControl;
  priorityControl:FormControl;
  travelcityControl:FormControl;
  fromlocationControl:FormControl;
  startdateControl:FormControl;
  enddateControl:FormControl;
  durationControl:FormControl;
  passportControl:FormControl;
  projectnameControl:FormControl;
  upperboundControl:FormControl;
  detailsControl:FormControl;
  approverControl:FormControl;
  expenseborneControl:FormControl;

  ngOnInit() {

    this.getCountries();
    
    this.service.getTicketTypes().subscribe((response)=>{
      this.ticketTypes=response;
    })

    this.typeControl=new FormControl('', [Validators.required]);
    this.priorityControl=new FormControl('', [Validators.required]);
    this.travelcityControl=new FormControl('', [Validators.required]);
    this.fromlocationControl=new FormControl('', [Validators.required]);
    this.startdateControl=new FormControl('', [Validators.required]);
    this.enddateControl=new FormControl('', [Validators.required]);
    this.durationControl=new FormControl('', [Validators.required]); 
    this.passportControl=new FormControl('', [Validators.required,Validators.maxLength(9)]);
    this.approverControl=new FormControl('');
    this.projectnameControl=new FormControl('', [Validators.required]);
    this.detailsControl=new FormControl('', [Validators.required]);
    this.upperboundControl=new FormControl('');
    this.expenseborneControl=new FormControl('', [Validators.required]);

    this.user = JSON.parse(localStorage.getItem('user'));

    //initialize form group

    this.regForm= new FormGroup({
      type : this.typeControl,
      ticketDetails: new FormGroup({
      priority : this.priorityControl,
      travelcity : this.travelcityControl,
      fromlocation : this.fromlocationControl,
      startdate : this.startdateControl,
      enddate : this.enddateControl,
      duration : this.durationControl,
      passport : this.passportControl,
      approver : this.approverControl,
      projectname : this.projectnameControl,
      details : this.detailsControl,
      upperbound : this.upperboundControl,
      expenseborne : this.expenseborneControl
    })
    })
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  onFormSubmit(){
    if(this.regForm.valid && this.regForm.get('ticketDetails').valid){
     let ticket = {
       ticket:{
         user:{
           id:  this.user.id
         },
         type:{
           id: this.regForm.get('type').value
         }
       },
       ticketDetails:{
         details: this.regForm.get('ticketDetails').value
       }
     }
     ticket.ticketDetails.details.status = 'submitted';

     this.service.saveTicket(ticket).subscribe((response)=>{
       if(response.status==200){
        let ticket1 : NewTicket ={
          id:response.body['id'],
          type:{
            id:this.regForm.get('type').value,
            name: ''
          },
          details:ticket.ticketDetails.details
        } 
        response.body['id']

        this.sessionService.updateSessionUserDetails();
        this.router.navigate(['/ticketconfirm',JSON.stringify(ticket1)])
        
       }else{
         alert('server error occured');
       }
     })
      
    }
    else{

    }
  }

  getCountries(){
    this.loginService.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }
}