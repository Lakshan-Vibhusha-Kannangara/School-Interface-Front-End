import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../Utilites/state-service/state-service';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { Student,StudentRef,StudentDetailReport} from '../Utilites/interfaces/interfaces';
@Component({
  selector: 'app-studentreport',
  templateUrl: './studentreport.component.html',
  styleUrls: ['./studentreport.component.css'],
})
export class StudentreportComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: number;
  registerForm: FormGroup;
  student: StudentRef | null = null;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      studentSelection: new FormArray([]),
    });

    this.stateService.fetchStudents().subscribe(
      (students: Student[]) => {
        this.students = students;
        const studentArray = this.registerForm.get('studentSelection') as FormArray;

        students.forEach((student, index) => {
          const control = new FormControl({
            name: student.firstName+" "+student.lastName,
            id: student.classroomID,
          });
          studentArray.push(control);
        });
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }

  addStudents(id: number) {
    this.stateService.fetchStudentReports(id).subscribe(
      (response: StudentDetailReport) => {
        console.log(response);

        this.student = {
          contactPerson: response.contactPerson,
          contactNo: response.contactNo,
          emailAddress: response.emailAddress,
          dateOfBirth: response.dateOfBirth,
          classroomID: response.classroomID,
          subjectTeacherPairs: response.subjectTeacherPairs,
        };
      },
      (error) => {
        console.error('Error fetching student details', error);
      }
    );
  }

  onStudentSelect(studentId: number) {
    this.selectedStudent = studentId;
    this.addStudents(studentId);
  }
}
