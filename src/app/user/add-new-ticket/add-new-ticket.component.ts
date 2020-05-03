import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { user } from 'src/app/models/user.interface';
import { NewTicket } from 'src/app/models/newTicket';

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
 

  constructor(
    private service :UserService,
    private router: Router) { }
  
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
         this.router.navigate(['/ticketconfirm',JSON.stringify(ticket.ticketDetails.details)])
        
       }else{
         alert('server error occured');
       }
     })
      
    }
    else{

    }
  }

  signOut() {
    this.router.navigateByUrl('/signin');
  }
}