import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {path: 'courseList', component: CourseListComponent},
  {path: 'assignment', component: AssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
