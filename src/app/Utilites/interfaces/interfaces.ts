export interface Classroom {
    classroomID?: number;
    classroomName: string;
  }
  export interface Student {
    firstName: string;
    lastName: string;
    contactPerson: string;
    contactNo: string;
    emailAddress: string;
    dateOfBirth: string;
    classroomID: number;
  }
  export interface AllocateClass {
    teacherID: number;
    classroomID: number;
    classroomName?: string;
    teacherName?:string;
  }
  export interface Teacher {
    teacherID?:number;
    firstName: string;
    lastName: string;
    contactNo: string;
    emailAddress: string;
  }
 
  export interface AllocateSubject {
    teacherID: number;
    subjectID: number;
    subjectName?:string;
    teacherName?:string;
  }

  
  export interface SubjectTeacherPair {
    subjectName: string;
    teacherName: string;
  }
  export interface StudentRef{
    contactPerson:string,
    contactNo:string,
    emailAddress: string,
    dateOfBirth: string,
    classroomID: number,
    subjectTeacherPairs: SubjectTeacherPair[],
    
  }
  
  
  export interface StudentDetailReport {
    studentDetailReportID: number;
    studentID: number;
    classroomID: number;
    contactPerson: string;
    contactNo: string;
    emailAddress: string;
    dateOfBirth: string;
    subjectTeacherPairs: SubjectTeacherPair[];
  }



 
  
 export  interface StudentReport {
    FirstName: string;
    LastName: string;
    ContactPerson: string;
    ContactNo: string;
    EmailAddress: string;
    DateOfBirth: string;
    ClassroomID: number;
    SubjectTeacherPairs: SubjectTeacherPair[];
  }


  
  export interface ClassroomPost {
    classroomName: string;
  }


  export interface Subject {
    subjectName: string;
  }