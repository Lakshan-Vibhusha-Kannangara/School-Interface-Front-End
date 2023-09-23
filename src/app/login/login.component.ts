import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private stateService: StateService) {}
  classrooms: Classroom[] = [];
  selectedClass: number;
  loginForm: FormGroup;

  addClasses() {
    this.stateService.fetchClassrooms().subscribe(
      (classrooms: Classroom[]) => {
        this.classrooms = classrooms;

        const classroomArray = <FormArray>this.loginForm.get('classrooms');
        console.log(classrooms)
        classrooms.forEach((classroom, index) => {
          const isSelected = index === 0;
          const control = new FormControl(isSelected);
          classroomArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching classrooms', error);
      }
    );
  }



  ngOnInit() {
    this.loginForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      birthdayDate: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      contactPerson: new FormControl(null, Validators.required),
      contactNo: new FormControl(null, Validators.required),
      classrooms: new FormArray([]),
    });
    this.addClasses();

    this.stateService.fetchClassrooms();
    this.stateService.fetchTeachers();
    this.stateService.fetchSubjects();
    this.stateService.fetchStudents();
  }

  onSubmit() {
    const formData = this.loginForm.value;

    this.student = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactPerson: formData.contactPerson,
      contactNo: formData.contactNo,
      emailAddress: formData.email,
      dateOfBirth: formData.birthdayDate,
      classroomID: this.selectedClass,
    };

    // Now, post the student data

    this.stateService.postStudent(this.student).subscribe((response) => {
      console.log(response);
    });
  }


  onClassroomSelect(event: Event) {
    const selectedValueAsString = (event.target as HTMLSelectElement).value;
    const selectedValueAsNumber = parseInt(selectedValueAsString, 10);
    this.selectedClass = selectedValueAsNumber + 1;
  }
 
}
