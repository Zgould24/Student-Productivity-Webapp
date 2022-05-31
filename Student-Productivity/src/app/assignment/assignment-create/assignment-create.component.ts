import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assignment } from "../../models/assignment";
import { AssignmentsService } from '../assignments.service';
import { CoursesService } from '../../courses/courses.service';
import {Course} from '../../models/course';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent implements OnInit, OnDestroy{

  assignment: Assignment;
  assignmentForm: FormGroup;
 
  private courseSub: Subscription;
  private courseNames: string[];
  private NoCourses: boolean;
  
  constructor(private assignmentService: AssignmentsService, 
              private courseService: CoursesService,
              private fb: FormBuilder) { 
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

    this.assignmentForm = this.fb.group({
      courseName: ['', Validators.required],
      assignmentName: ['', Validators.required],
      dueDate: ['', Validators.required]
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

    const courseName = this.assignmentForm.controls['courseName'].value || "INVDINPUT";
    const assignmentName = this.assignmentForm.controls['assignmentName'].value || "INVDINPUT";
    const dueDate = this.assignmentForm.controls['dueDate'].value || "INVDINPUT";
    console.log(courseName);
    // let newAssignment = new Assignment(courseName, assignmentName, dueDate);
    if ( courseName === "INVDINPUT" || assignmentName === "INVDINPUT" || dueDate === "INVDINPUT") {
      return ;
    } else {
      console.log("creating task");
    
    this.assignmentService.addAssignment(courseName, assignmentName, dueDate, false);
    }
    
  }

  
}