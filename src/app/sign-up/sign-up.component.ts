import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginResponse } from '../Utilites/interfaces/interfaces';

interface Classroom {
  classroomID: number;
  classroomName: string;
}

interface Student {
  firstName: string;
  lastName: string;
  contactPerson: string;
  contactNo: string;
  emailAddress: string;
  dateOfBirth: string;
  classroomID: number;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('classroomSelect') classroomSelect: any;

  student: Student;
  classrooms: Classroom[] = [];
  selectedClass: number;
  signUpForm: FormGroup;

  constructor(
    private stateService: StateService,
    private cookieService: CookieService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  setAuthTokenInSessionCookie(authToken) {
    this.cookieService.set('authToken', authToken, undefined, '/');
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      fullName: [null, Validators.required],
      emailId: [null, Validators.required],
      password: [null, Validators.required],
      designation: [null, Validators.required],
    });
  }

  onSubmit() {
    const formData = this.signUpForm.value;

    this.stateService
      .postUser({
        fullName: formData.fullName,
        emailId: formData.emailId,
        password: formData.password,
        designation: formData.designation,
      })
      .subscribe((response: LoginResponse) => {
        this.setAuthTokenInSessionCookie(response.token);
        alert('sign up successful');
        console.log(this.cookieService.get('authToken'));
        this.router.navigate(['/login']);
      });
  }
}
