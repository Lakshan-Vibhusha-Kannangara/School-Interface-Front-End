import { Component } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
})
export class ClassroomComponent {
  classForm: FormGroup;

  constructor(private stateService: StateService) {
    this.classForm = new FormGroup({
      className: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.stateService
      .postClassroom({
        classroomName: this.classForm.value.className,
      })
      .subscribe(
        (response) => {
          alert('Classroom has been successfully created!');
          this.classForm.reset();
        },
        (error) => {
          alert(
            'Error occurred while creating the classroom. Please try again.'
          );
        }
      );
  }
}
