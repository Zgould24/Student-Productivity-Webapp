import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentComponent } from './assignment/assignment.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// In this script, we establish routing between components. 
// Path is specified as follows and 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'courseList', component: CourseListComponent},
  {path: 'assignment', component: AssignmentComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
