import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StateService],
})
export class LoginComponent implements OnInit {
  @ViewChild('classroomSelect') classroomSelect: any;

  student: Student;
  classrooms: Classroom[] = [];
  selectedClass: number;
  loginForm: FormGroup;

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
    this.loginForm = this.formBuilder.group({
      emailId: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    const formData = this.loginForm.value;

    this.stateService
      .postLogin({ emailId: formData.emailId, password: formData.password })
      .subscribe((response: LoginResponse) => {
        this.setAuthTokenInSessionCookie(response.token);

        this.router.navigate(['/register']);
      });
  }
}
