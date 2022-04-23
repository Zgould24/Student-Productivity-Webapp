import { Component, OnInit } from '@angular/core';
import { Assignment } from "../../models/assignment";
import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent{

  assignment: Assignment;
  homeworks: any;
  completes: any;
  clicked = false;
  constructor(private assignmentService: AssignmentsService) { 
    this.assignment = new Assignment();
  }

  ngOnInit(): void {
    this.homeworks = [];
    this.completes = [];
    // console.log(this.homeworks);
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
    this.homeworks.push(this.assignment);
    this.assignmentService.addAssignment(courseName, assignmentName, dueDate, false);
    }
    // this.assignment = newAssignment;
    console.log(this.homeworks);
    this.clicked = true;
  }

  complete(event: any) {
    console.log(event);
    // this.assignmentService.completeAssignment()
    this.completes.push(event);
    this.homeworks.splice(this.homeworks.indexOf(event), 1);
  }

  
}