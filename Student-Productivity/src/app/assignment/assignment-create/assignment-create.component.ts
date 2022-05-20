import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assignment } from "../../models/assignment";
import { AssignmentsService } from '../assignments.service';
import { CoursesService } from '../../courses/courses.service';
import {Course} from '../../models/course';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent implements OnInit, OnDestroy{

  assignment: Assignment;
 
  private courseSub: Subscription;
  private courseNames: string[];
  private NoCourses: boolean;
  
  constructor(private assignmentService: AssignmentsService, private courseService: CoursesService) { 
    this.assignment = new Assignment();
    this.courseNames = [];
  }

  ngOnInit() {
    this.courseService.getCourses();
    // console.log("Hello from the assignment create");
    this.courseSub = this.courseService.getCoursesUpdateListener().subscribe((courses: Course[]) => {
      // console.log("inside the subscribe");
      if (courses.length === 0) {
        // we want to do a boolean/ 

      } else {
      console.log(courses);
      for (let i = 0; i < courses.length; i++){
        // console.log(courses[i].title);
        // console.log(typeof courses[i].title);
        this.courseNames.push(courses[i].title);
      }
      }
    });
    //  console.log(this.courseNames);
  }
  ngOnDestroy(){
    this.courseSub.unsubscribe();
  }

  get CourseNames(){
    return this.courseNames;
  }
  submit() {
    const courseName = this.assignment.course || "INVDINPUT";
    const assignmentName = this.assignment.assignment || "INVDINPUT";
    const dueDate = this.assignment.dueDate || "INVDINPUT";
    // let newAssignment = new Assignment(courseName, assignmentName, dueDate);
    if ( courseName === "INVDINPUT" || assignmentName === "INVDINPUT" || dueDate === "INVDINPUT") {
      return ;
    } else {
      console.log("creating task");
    
    this.assignmentService.addAssignment(courseName, assignmentName, dueDate, false);
    }
    
  }

  
}