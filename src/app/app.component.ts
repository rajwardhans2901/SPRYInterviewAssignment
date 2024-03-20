import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { NavBarService } from './Services/navBar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter(), NavBarService],
})
export class AppComponent implements OnInit {
  title = 'SpryAngular1';
  newClass: string = 'primary'

  employeeForm: FormGroup
  
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('phoneNumber') phoneNumber: ElementRef;
  @ViewChild('address') address: ElementRef;
  @ViewChild('position') position: ElementRef;
  @ViewChild('dateOfJoining') dateOfJoining: ElementRef;
  constructor(public navbarService: NavBarService, private formBuilder: FormBuilder) {
  }
  
  ngOnInit() {
    this.employeeForm  = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      address: ['', Validators.required],
      position: ['', Validators.required],
      dateOfJoining: ['']
    });
  }
  
  onFormSubmit() {
    console.log(`First Name is ${this.firstName.nativeElement.value}`);
    console.log(`Last Name is ${this.lastName.nativeElement.value}`);
    console.log(`Email is ${this.email.nativeElement.value}`);
    console.log(`Phone Number is ${this.phoneNumber.nativeElement.value}`);
    console.log(`Address is ${this.address.nativeElement.value}`);
    console.log(`Position is ${this.position.nativeElement.value}`);
    console.log(`Date of joining is ${this.dateOfJoining.nativeElement.value}`);
  }

}
