import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { CourseListComponent } from './courses/course-list/course-list.component';


// In this script, we establish routing between components. 
// Path is specified as follows and 

const routes: Routes = [
  {path: 'courseList', component: CourseListComponent},
  {path: 'assignment', component: AssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
