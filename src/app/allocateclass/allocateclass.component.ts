import { Component, OnInit } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Classroom,
  Teacher,
  AllocateClass,
} from '../Utilites/interfaces/interfaces';

@Component({
  selector: 'app-allocateclass',
  templateUrl: './allocateclass.component.html',
  styleUrls: ['./allocateclass.component.css'],
})
export class AllocateclassComponent implements OnInit {
  allocateForm: FormGroup;
  selectedTeacher: number;
  selectedClass: number;
  selectedTeacherName: string;
  selectedClassName: string;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.allocateForm = new FormGroup({
      teachers: new FormArray([]),
      classes: new FormArray([]),
      allocated: new FormArray([]),
    });

    this.fetchClasses();
    this.fetchTeachers();
  }
  deallocateClassroom(cls: number) {
    this.stateService
      .deAllocateClassroom(cls, this.selectedTeacher)
      .subscribe((response) => {
        const allocationArray = this.allocateForm.get('allocated') as FormArray;

        const indexToRemove = allocationArray.controls.findIndex(
          (control) => control.value.id === cls
        );

        if (indexToRemove !== -1) {
          allocationArray.removeAt(indexToRemove);
        }
      });
  }
  onSubmit() {
    const formData = this.allocateForm.value;

    this.stateService
      .postAllocateClass({
        teacherID: this.selectedTeacher,
        classroomID: this.selectedClass,
      })
      .subscribe(
        (response: AllocateClass) => {
          const allocationArray = this.allocateForm.get(
            'allocated'
          ) as FormArray;
          allocationArray.push(
            new FormControl({
              name: response.teacherName,
              id: response.classroomID,
            })
          );
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  fetchTeachers() {
    this.stateService.fetchTeachers().subscribe(
      (teachers: Teacher[]) => {
        const teacherArray = <FormArray>this.allocateForm.get('teachers');

        teachers.forEach((teacher, index) => {
          const control = new FormControl({
            name: teacher.firstName + ' ' + teacher.lastName,
            id: teacher.teacherID,
            selected: false,
          });
          teacherArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching teachers', error);
      }
    );
  }

  fetchClasses() {
    this.stateService.fetchClassrooms().subscribe(
      (classes: Classroom[]) => {
        const classesArray = <FormArray>this.allocateForm.get('classes');

        classes.forEach((classroom, index) => {
          const control = new FormControl({
            name: classroom.classroomName,
            id: classroom.classroomID,
            selected: false,
          });
          classesArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching subjects', error);
      }
    );
  }

  onTeacherSelect(val: number) {
    this.selectedTeacher = val;
  }

  onClassSelect(val: number) {
    this.selectedClass = val;
  }
}
