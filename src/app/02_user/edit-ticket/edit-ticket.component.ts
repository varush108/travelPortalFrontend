import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { user } from 'src/app/models/user.interface';
import { NewTicket } from 'src/app/models/newTicket';
import { details } from 'src/app/models/details.interface';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  regForm : FormGroup;
  errorMessage:string;
  user:user;
  ticketTypes:{id:BigInteger,name:string}[];
  details:details;
  ticket:NewTicket;
 
 

  constructor(
    private service :UserService,
    private router: Router,
    private routeActivate : ActivatedRoute) { }
  
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



    this.routeActivate.params.subscribe(params => {
      this.ticket = JSON.parse(params['details']);
    });

    this.details=this.ticket.details;

    this.typeControl=new FormControl(this.ticket.type.id, [Validators.required]);
    this.priorityControl=new FormControl(this.details.priority, [Validators.required]);
    this.travelcityControl=new FormControl(this.details.tolocation, [Validators.required]);
    this.fromlocationControl=new FormControl(this.details.fromlocation, [Validators.required]);
    this.startdateControl=new FormControl(this.details.startdate, [Validators.required]);
    this.enddateControl=new FormControl(this.details.enddate, [Validators.required]);
    this.durationControl=new FormControl(this.details.duration, [Validators.required]); 
    this.passportControl=new FormControl(this.details.passport, [Validators.required,Validators.maxLength(9)]);
    this.approverControl=new FormControl(this.details.approver);
    this.projectnameControl=new FormControl(this.details.projectname, [Validators.required]);
    this.detailsControl=new FormControl(this.details.adddetail, [Validators.required]);
    this.upperboundControl=new FormControl(this.details.upperbound);
    this.expenseborneControl=new FormControl(this.details.expenseborne, [Validators.required]);

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
   
      let ticketDetails:ticketDetails={
        id:"",
        details:this.regForm.get('ticketDetails').value,
        user:{
          id:this.user.id
        },
        ticket:{
          id:this.ticket.id
        }
      }
    ticketDetails.details.status = 'resubmitted';

     this.service.saveTicketDetails(ticketDetails).subscribe((response)=>{
       if(response.status==200){
         alert('Ticket details have been edited');
         this.router.navigate(['/mytickets'])
        
       }else{
         alert('server error occured');
       }
     })
      
    }
    else{
        alert("form not valid");
    }
  }



  signOut() {
    this.router.navigateByUrl('/signin');
  }
}


