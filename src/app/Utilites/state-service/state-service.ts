import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  Subject,
  Classroom,
  Teacher,
  AllocateClass,
  AllocateSubject,
  ClassroomPost,
  Student,
  StudentDetailReport,
} from '../interfaces/interfaces';

@Injectable()
export class StateService {
  constructor(private http: HttpClient) {}

  fetchClassrooms(): Observable<Classroom[]> {
    return this.http
      .get<Classroom[]>('https://localhost:5001/api/Classroom/GetClassrooms')
      .pipe(
        catchError((error) => {
          console.error('Error fetching classrooms', error);
          return throwError(error);
        })
      );
  }

  fetchTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(
      'https://localhost:5001/api/Teacher/GetTeachers'
    );
  }

  fetchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(
      'https://localhost:5001/api/Student/GetStudent'
    );
  }

  fetchSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(
      'https://localhost:5001/api/Subject/GetSubjects'
    );
  }

  fetchStudentReports(id: number): Observable<StudentDetailReport> {
    return this.http.get<StudentDetailReport>(
      `https://localhost:5001/api/StudentDetailReport/GetStudentDetailReport/${id}`
    );
  }

  postStudent(student: Student): Observable<any> {
    return this.http.post(
      'https://localhost:5001/api/Student/AddStudent',
      student
    );
  }

  postTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(
      'https://localhost:5001/api/Teacher/AddTeacher',
      teacher
    );
  }

  postSubject(subject: Subject): Observable<any> {
    return this.http.post(
      'https://localhost:5001/api/Subject/AddSubject',
      subject
    );
  }

  postClassroom(classroom: ClassroomPost): Observable<any> {
    return this.http.post(
      'https://localhost:5001/api/Classroom/AddClassroom',
      classroom
    );
  }

  postAllocateSubject(allocation: AllocateSubject): Observable<any> {
    return this.http.post(
      'https://localhost:5001/api/SubjectTeacher/AddSubjectTeacher',
      allocation
    );
  }

  postAllocateClass(allocation: AllocateClass): Observable<any> {
    return this.http.post(
      'https://localhost:5001/api/AllocateClassroom',
      allocation
    );
  }
  deAllocateSubject(subjectId: number, teacherId: number): Observable<any> {
    const url = `https://localhost:5001/api/SubjectTeacher/DeleteBySubjectAndTeacher/${subjectId}/${teacherId}`;
    return this.http.delete(url);
  }
  deAllocateClassroom(classroomId: number, teacherId: number): Observable<any> {
    const url = `https://localhost:5001/api/AllocateClassroom/DeleteByClassroomIDAndTeacherID/${classroomId}/${teacherId}`;
    return this.http.delete(url);
  }
}
