import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

import { environment } from '../env/env';
import {
  Subject,
  Classroom,
  Teacher,
  AllocateClass,
  AllocateSubject,
  ClassroomPost,
  Student,
  StudentDetailReport,
  User,
} from '../interfaces/interfaces';

@Injectable()
export class StateService {
  constructor(private http: HttpClient) {}

  fetchClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(
      `${environment.apiUrl}/Classroom/GetClassrooms`
    );
  }

  fetchTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(
      `${environment.apiUrl}/Teacher/GetTeachers`
    );
  }

  fetchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${environment.apiUrl}/Student/GetStudents`
    );
  }

  fetchSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(
      `${environment.apiUrl}/Subject/GetSubjects`
    );
  }

  fetchStudentReports(id: number): Observable<StudentDetailReport> {
    return this.http.get<StudentDetailReport>(
      `${environment.apiUrl}/StudentDetailReport/GetStudentDetailReport/${id}`
    );
  }

  postStudent(student: Student): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Student/AddStudent`, student);
  }

  postTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Teacher/AddTeacher`, teacher);
  }

  postLogin(login: User): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/Login/PostLoginDetails`,
      login
    );
  }

  postUser(register: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Login/Register`, register);
  }

  postSubject(subject: Subject): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Subject/AddSubject`, subject);
  }

  postClassroom(classroom: ClassroomPost): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/Classroom/AddClassroom`,
      classroom
    );
  }

  postAllocateSubject(allocation: AllocateSubject): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/SubjectTeacher/AddSubjectTeacher`,
      allocation
    );
  }

  postAllocateClass(allocation: AllocateClass): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/AllocateClassroom`,
      allocation
    );
  }

  deAllocateSubject(subjectId: number, teacherId: number): Observable<any> {
    const url = `${environment.apiUrl}/SubjectTeacher/DeleteBySubjectAndTeacher/${subjectId}/${teacherId}`;
    return this.http.delete(url);
  }

  deAllocateClassroom(classroomId: number, teacherId: number): Observable<any> {
    const url = `${environment.apiUrl}/AllocateClassroom/DeleteByClassroomIDAndTeacherID/${classroomId}/${teacherId}`;
    return this.http.delete(url);
  }
}
