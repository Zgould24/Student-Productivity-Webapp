import { Component, OnInit } from '@angular/core';
import { Assignment } from '../models/assignment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent{
  // Vairable declarations

  assignment: Assignment;
  homeworks: any;
  completes: any;
  clicked = false;

  // Utlizing constructor defined in models folder
  constructor() { 
    this.assignment = new Assignment();
  }

  // To do assignments and completed assignments being pushed to array
  // to be saved for later use
  ngOnInit(): void {
    this.homeworks = [];
    this.completes = [];
    console.log(this.homeworks);
  }

  // Creates an assignment and pushes it to the homework array
  submit() {
    let newAssignment = new Assignment(this.assignment.course, this.assignment.assignment, this.assignment.dueDate);
    this.assignment = newAssignment;
    this.homeworks.push(this.assignment);
    console.log(this.homeworks);
    this.clicked = true;
  }

  // Moves an assignment from the upcoming section to the
  // completed section
  complete(event: any) {
    console.log(event);
    this.completes.push(event);
    this.homeworks.splice(this.homeworks.indexOf(event), 1);
  }
}