import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, FormBuilder } from '@angular/forms'; 
import { UserRegister } from 'src/app/models/userRegister';
import { BusinessUnit } from 'src/app/models/businessUnit';
import { LoginService } from '../services/login.service.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private loginService : LoginService,
    private datePipe: DatePipe,
    private router: Router) { }

  businessUnits:BusinessUnit[];
  regForm : FormGroup;
  user : UserRegister;
  todayDate:Date;
  created_on:string
  

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];


  errorMessge:string;
  
  firstNameControl:FormControl;
  lastNameControl:FormControl;
  businessUnitControl:FormControl;
  titleControl:FormControl;
  emailControl:FormControl;
  phoneControl:FormControl;
  address1Control:FormControl;
  address2Control:FormControl;
  countryControl:FormControl;
  stateControl:FormControl;
  cityControl:FormControl;
  zipcodeControl:FormControl;


 

  ngOnInit() {
    this.getCountries();

    this.loginService.getAllBusinessUnits().subscribe((businessUnits: BusinessUnit[]) => {
      this.businessUnits = businessUnits;
    });

    this.firstNameControl=new FormControl('', [Validators.required]);
    this.lastNameControl=new FormControl('', [Validators.required]);
    this.emailControl=new FormControl('', [Validators.required,Validators.email]);
    this.titleControl=new FormControl('', [Validators.required]);
    this.businessUnitControl=new FormControl('', [Validators.required]);
    this.phoneControl=new FormControl('', [Validators.required,Validators.maxLength(15)]);
    this.address1Control=new FormControl('', [Validators.required]); 
    this.address2Control=new FormControl('');
    this.countryControl=new FormControl('', [Validators.required]);
    this.stateControl=new FormControl('', [Validators.required]);
    this.cityControl=new FormControl('', [Validators.required]);
    this.zipcodeControl=new FormControl('', [Validators.required]);

    //initialize form group

    this.regForm= new FormGroup({
      firstName : this.firstNameControl,
      lastName : this.lastNameControl,
      email : this.emailControl,
      telephone : this.phoneControl,
      title: this.titleControl,
      businessUnit : this.businessUnitControl,
      address: new FormGroup({
        address1:this.address1Control,
        address2:this.address2Control,
        country : this.countryControl,
        city:this.cityControl,
        state:this.stateControl,
        zipcode:this.zipcodeControl
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
    if(this.regForm.valid && this.regForm.get('address').valid){
     this.user = this.regForm.value;
     this.todayDate = new Date();
     this.created_on = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd');
     this.user.created_on=this.created_on;
      this.user.address.country = this.countryInfo[this.regForm.get('address').get('country').value]['CountryName'];
      this.user.address.state = this.stateInfo[this.regForm.get('address').get('state').value]['StateName'];
      this.user.address.city = this.cityInfo[this.regForm.get('address').get('city').value];
     this.loginService.registerUser(this.user).subscribe((response) =>{
       if(response.status == 200){
        localStorage.setItem("userRegister",JSON.stringify(this.user));
        this.loginService.sendConformationMail(this.user.email,response.body['password']).subscribe((responseData)=>{
          
        })
        this.router.navigate(['/registrationConfirm']);
       } 
       else if(response.status==500){ 
         alert("Server Error occured");
       }
       else if(response.status==400 ){
         alert("Error in form. Please check")
       }
     })
    }
    else{
      this.errorMessge="Please Complete all the validations to continue to register"
      this.regForm.markAllAsTouched();
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

  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }



}
