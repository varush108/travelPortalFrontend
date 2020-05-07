import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/user.interface';
import { tickets } from 'src/app/models/tickets.interface';
import { UserService } from '../services/user.service';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  regForm: FormGroup;
  id: string;
  Ticket: tickets;
  ticketDetails: ticketDetails[];
  constructor(
    private router: Router,
    private userservice: UserService,
    private route: ActivatedRoute
  ) { }

  commentsControl: FormControl;
  attachmentControl: FormControl;

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = JSON.parse(params['id']);
    });

    this.commentsControl = new FormControl('',[Validators.required]);
    this.attachmentControl = new FormControl('',[Validators.required]);

    this.regForm = new FormGroup({
      comments: this.commentsControl,
      attachment: this.attachmentControl
    })

    this.userservice.getTicketById(this.id)
      .subscribe((ticket: tickets) => {
        this.Ticket = ticket;
        this.ticketDetails = ticket.ticketDetails;
        console.log(this.Ticket);
      })

  }

  backToHome() {
    this.router.navigateByUrl("/mytickets");
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  onFormSubmit() {
    alert('formSubmitted');
    if (this.regForm.valid) {
      console.log(this.regForm.get('attachment'));
      if(this.regForm.get('attachment').value!=null){
        let fd = new FormData();
        fd.append('file',this.regForm.get('attachment').value);
        this.userservice.uploadAttachements(this.regForm.value).subscribe((response)=>{
          console.log('upload attachments');
          console.log(response);
        })
      }
    } else {
      alert('server error occured');
    }
  }
}