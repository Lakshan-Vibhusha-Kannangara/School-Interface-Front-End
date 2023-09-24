import { Component, OnInit } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  onSubmit() {
    const formData = this.subjectForm.value;

    this.stateService
      .postSubject({ subjectName: formData.subjectName })
      .subscribe(
        (response) => {
          alert('Sent Successfully');
          this.subjectForm.reset();
        },
        (error) => {
          alert('Subject Exists');
        }
      );
  }
  subjectForm: FormGroup;
  ngOnInit() {
    this.subjectForm = new FormGroup({
      subjectName: new FormControl(null, Validators.required),
    });
  }
  constructor(private stateService: StateService) {}
}
