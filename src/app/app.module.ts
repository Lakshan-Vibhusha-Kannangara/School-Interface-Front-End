import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AllocateclassComponent } from './allocateclass/allocateclass.component';
import { AllocatesubjectComponent } from './allocatesubject/allocatesubject.component';
import { StudentreportComponent } from './studentreport/studentreport.component';
import { StateService } from './Utilites/state-service/state-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopInterceptor } from './Utilites/cors-configure/NoopInterceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './Utilites/footer/footer.component'; // Import the interceptor
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormInputComponent } from './Utilites/form-input/form-input.component';
import { CustomSelectComponent } from './Utilites/custom-select/custom-select.component';
const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'allocateclass', component: AllocateclassComponent },
  { path: 'allocatesubject', component: AllocatesubjectComponent },
  { path: 'studentreport', component: StudentreportComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ClassroomComponent,
    TeachersComponent,
    SubjectsComponent,
    AllocateclassComponent,
    AllocatesubjectComponent,
    StudentreportComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,

    FormInputComponent,
    CustomSelectComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [
    StateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor, // Use the interceptor
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
