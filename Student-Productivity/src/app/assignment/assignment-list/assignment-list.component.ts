import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import {Assignment} from '../../models/assignment';
import { AssignmentsService } from '../assignments.service';
@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit, OnDestroy {

   homeworks: Assignment[] = [];
  private completes: Assignment[] = [];
  private homeworksSub: Subscription;
  private completedSub: Subscription;
  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
    this.assignmentsService.getAssignments();
    // console.log("after the get assignment call");
    this.homeworksSub = this.assignmentsService.getAssignmentUpdatedListener().subscribe((assignments: Assignment[])=> {
      console.log("getting assignments");
      console.log(assignments);
      this.homeworks = assignments;
    });
    this.completedSub = this.assignmentsService.getAssignmentCompletedUpdatedListener().subscribe((assignments: Assignment[])=> {
      this.completes = assignments;
    })
  }


  ngOnDestroy(){
    this.homeworksSub.unsubscribe(); 
    // this.completedSub.unsubscribe();
  }

  get Completes(){
    return this.completes;
  }

  get Homeworks(){
    return this.homeworks;
  }
  // event is the assignment type
  complete(event: Assignment) {
    console.log(event);
    event.completed = true;
    this.assignmentsService.completeAssignment(event.id, event.course, event.assignment, event.dueDate, event.completed);
    this.completes.push(event);
    this.homeworks.splice(this.homeworks.indexOf(event), 1);
  }
}