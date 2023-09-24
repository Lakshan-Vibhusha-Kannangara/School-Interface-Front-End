import { Component } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../Utilites/interfaces/interfaces';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent {
  teacher: Teacher;
  teachersForm: FormGroup;
  constructor(private stateService: StateService) {
    this.teachersForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      contactNo: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    const formData = this.teachersForm.value;

    this.teacher = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactNo: formData.contactNo,
      emailAddress: formData.email,
    };
    this.stateService.postTeacher(this.teacher).subscribe(
      (response) => {
        alert('Teacher Created Successfully');
        this.teachersForm.reset();
      },
      (error) => {
        alert('Teacher exists');
      }
    );
  }
}
