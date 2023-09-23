import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { Classroom, Student } from '../Utilites/interfaces/interfaces';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [StateService],
})
export class RegisterComponent implements OnInit {
  student: Student;
  constructor(private stateService: StateService) {}
  classrooms: Classroom[] = [];
  selectedClassroom: number;
  registerForm: FormGroup;

  fetchClasses() {
    this.stateService.fetchClassrooms().subscribe(
      (classes: Classroom[]) => {
        console.log(classes);
        const classroomArray = <FormArray>this.registerForm.get('classrooms');

        classes.forEach((classroom, index) => {
          console.log(classroom);
          const control = new FormControl({
            name: classroom.classroomName,
            id: classroom.classroomID,
            selected: false,
          });
          classroomArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching subjects', error);
      }
    );
  }

  addClasses() {
    this.fetchClasses();
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
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
  }

  onSubmit() {
    const formData = this.registerForm.value;

    this.student = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactPerson: formData.contactPerson,
      contactNo: formData.contactNo,
      emailAddress: formData.email,
      dateOfBirth: formData.birthdayDate,
      classroomID: this.selectedClassroom,
    };

    // Now, post the student data
    this.stateService.postStudent(this.student).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
        alert('Student has been successfully registered!');
        // Clear the form after successful registration if needed
        this.registerForm.reset();
      },
      (error) => {
        // Handle error response
        console.error(error);
        alert(
          'Error occurred while registering the student. Please try again.'
        );
      }
    );
  }

  // Initialize selectedClassroom to null

  // Update the event handler to handle null values
  onClassroomSelect(value: number) {
    this.selectedClassroom = value;
  }
}
