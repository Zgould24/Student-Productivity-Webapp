import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from './courses/course-list/course-list.component';
import {CourseCreateComponent} from './courses/course-create/course-create.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from'./auth/auth.guard';
import {AssignmentCreateComponent} from "./assignment/assignment-create/assignment-create.component";
import {TimerItselfComponent } from './timer-itself/timer-itself.component';
import {HomeComponent} from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

// In this script, we establish routing between components. 
// Path is specified as follows and 

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'CCreate', component: CourseCreateComponent, canActivate: [AuthGuard]},
  {path: 'Cedit/:courseId', component: CourseCreateComponent, canActivate: [AuthGuard]},
  {path: 'TaskCreate', component: AssignmentCreateComponent, canActivate: [AuthGuard]},
  {path: 'StudyTimer', component: TimerItselfComponent, canActivate:[AuthGuard]},
  {path: 'Calendar', component: CalendarComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
