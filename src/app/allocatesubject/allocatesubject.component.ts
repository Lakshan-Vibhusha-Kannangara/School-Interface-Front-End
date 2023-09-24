import { Component, OnInit } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { AllocateSubject, Teacher } from '../Utilites/interfaces/interfaces';
@Component({
  selector: 'app-allocatesubject',
  templateUrl: './allocatesubject.component.html',
  styleUrls: ['./allocatesubject.component.css'],
})
export class AllocatesubjectComponent implements OnInit {
  allocateForm: FormGroup;
  selectedTeacherID: number;
  selectedTeacherName: string;
  selectedSubjectID: number;
  selectedSubjectName: string;
  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.allocateForm = new FormGroup({
      teachers: new FormArray([]),
      subjects: new FormArray([]),
      allocated: new FormArray([]),
    });

    this.fetchSubjects();
    this.fetchTeachers();
  }

  onSubmit() {
    const formData = this.allocateForm.value;

    this.stateService
      .postAllocateSubject({
        subjectID: this.selectedSubjectID,
        teacherID: this.selectedTeacherID,
      })
      .subscribe(
        (response: AllocateSubject) => {
          const allocationArray = this.allocateForm.get(
            'allocated'
          ) as FormArray;
          allocationArray.push(
            new FormControl({
              name: response.subjectName,
              id: this.selectedSubjectID,
              selected: false,
            })
          );
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
  onTeacherSelect(val: number) {
    this.selectedTeacherID = val;
  }

  onSubjectSelect(val: number) {
    this.selectedSubjectID = val;
  }
  deallocateSubject(subjectID: any) {
    this.stateService
      .deAllocateSubject(subjectID, this.selectedTeacherID)
      .subscribe((response) => {
        const allocationArray = this.allocateForm.get('allocated') as FormArray;

        const indexToRemove = allocationArray.controls.findIndex(
          (control) => control.value.id === subjectID
        );

        if (indexToRemove !== -1) {
          allocationArray.removeAt(indexToRemove);
        }
      });
  }

  fetchTeachers() {
    this.stateService.fetchTeachers().subscribe(
      (teachers: Teacher[]) => {
        const teacherArray = <FormArray>this.allocateForm.get('teachers');

        teachers.forEach((teacher, index) => {
          const control = new FormControl({
            name: teacher.firstName + ' ' + teacher.lastName,
            selected: false,
            id: teacher.teacherID,
          });

          teacherArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching teachers', error);
      }
    );
  }

  fetchSubjects() {
    this.stateService.fetchSubjects().subscribe(
      (subjects: any) => {
        const subjectsArray = <FormArray>this.allocateForm.get('subjects');

        subjects.forEach((subject, index) => {
          const control = new FormControl({
            name: subject.subjectName,
            selected: 'false',
            id: subject.subjectID,
          });

          subjectsArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching subjects', error);
      }
    );
  }
}
