import { Component, OnInit } from '@angular/core';
import { Assignment } from '../models/assignment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent{

  assignment: Assignment;
  homeworks: any;
  completes: any;
  constructor() { 
    this.assignment = new Assignment('CMS', 'POL', '07/09/2020');
  }

  ngOnInit(): void {

    this.homeworks = [];
    this.completes = [];
    console.log(this.homeworks);
  }

  submit() {
    let newAssignment = new Assignment(this.assignment.course, this.assignment.assignment, this.assignment.dueDate);
    this.assignment = newAssignment;
    this.homeworks.push(this.assignment);
    console.log(this.homeworks);
  }

  complete(event: any) {
    console.log(event);
    this.completes.push(event);
    this.homeworks.splice(this.homeworks.indexOf(event), 1);
  }
}