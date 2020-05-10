import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/02_user/services/user.service';
import { tickets } from 'src/app/models/tickets.interface';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-adminticketdetails',
  templateUrl: 'adminticketdetails.component.html',
  styleUrls: ['adminticketdetails.component.css']
})
export class AdminTicketDetailsComponent {
  Ticket: tickets;
  ticketDetails: ticketDetails[];  
  ticketDetails1: ticketDetails[];
  id: string;
  file :File;
  regForm: FormGroup;
  commentsControl: FormControl;
  attachmentControl: FormControl;
  statusControl : FormControl;
  admin = JSON.parse(localStorage.getItem('admin'));

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userservice: UserService
  ) { }

  ngOnInit() {
    
    this.commentsControl = new FormControl('',[Validators.maxLength(1000)]);
    this.attachmentControl = new FormControl('');
    this.statusControl = new FormControl('',[Validators.required]);

    this.regForm = new FormGroup({
   
      file: this.attachmentControl
    })
    this.route.params.subscribe(params => {
      this.id = JSON.parse(params['id']);
    });
    this.userservice.getTicketById(this.id)
      .subscribe((ticket: tickets) => {
        this.Ticket = ticket;
        this.ticketDetails = this.sortDetails(ticket.ticketDetails);
        localStorage.setItem('Ticket',JSON.stringify(this.Ticket));
        //console.log(this.Ticket);
      })
      this.Ticket=JSON.parse(localStorage.getItem('Ticket'));
      console.log(this.Ticket);
  }
  sortDetails(detail : ticketDetails[]) {
    return orderBy(detail, 'id' , 'desc');
  }
  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  onChangeFile(file :File){
    this.file =file;
  }
  onFormSubmit(){

    
    console.log(this.file[0]);
    this.userservice.uploadAttachements(this.file[0]).subscribe((response)=>
    {
      console.log(response);
    });
    // console.log(this.Ticket);
    // if(this.regForm.valid){
   
    //   let ticketDetails1:ticketDetails={
    //     id:"",
    //     details:this.Ticket.ticketDetails[0].details,
    //     user:{
    //       id:this.admin.id
    //     },
    //     comments : this.regForm.get('comments').value,
    //     attachements : [this.regForm.get('attachment').value],
    //     ticket:{
    //       id:this.Ticket.id
    //     }
    //   }
    // ticketDetails1.details.status = this.regForm.get('status').value;
    // console.log(this.Ticket.id);

    //  this.userservice.saveTicketDetails(ticketDetails1).subscribe((response)=>{
    //    if(response.status==200){
    //      alert('Ticket details have been edited');
    //      this.router.navigate(['/ticketlist'])
        
    //    }else{
    //      alert('server error occured');
    //    }
    //  })
      
    // }
    // else{
    //     alert("form not valid");
    // }
  }
  backToHome() {
    this.router.navigateByUrl('/ticketlist')
  }
}