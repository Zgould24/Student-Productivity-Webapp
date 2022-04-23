import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import {Assignment} from '../models/assignment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private Assignments: Assignment[] = [];
  private completes: Assignment[] = [];
  private AssignmentUpdated = new Subject<Assignment[]>();
  private AssignmentCompletedUpdated = new Subject<Assignment[]>();
  constructor(private http: HttpClient) { }

  getAssignments(){
    console.log("Get assignments called.");
    this.http.get<{message: string, assignments: any}>("http://localhost:3000/api/assignments").pipe(map((AssignmentData) => 
    {
      return AssignmentData.assignments.map(assignment => 
        {
          // console.log(assignment);
        return {
          id: assignment._id,
          course: assignment.course,
          assignment: assignment.assignment,
          dueDate: assignment.dueDate,
          completed: assignment.completed
        };
      })
    })).subscribe(transformedAssignments => {
      // console.log(typeof transformedAssignments);
      let notCompleted :Assignment[]= []
      let AlreadyCompleted:Assignment[] =[]
      for (let i = 0; i < transformedAssignments.length; i++){
        console.log(transformedAssignments[i].completed);
        if (transformedAssignments[i].completed){
          const cmpltAssignment: Assignment = {id: transformedAssignments[i].id, course: transformedAssignments[i].course, assignment: transformedAssignments[i].assignment, dueDate: transformedAssignments[i].dueDate, completed: true};
          AlreadyCompleted.push(cmpltAssignment);
        } else {
          const notComplete: Assignment = {id: transformedAssignments[i].id, course: transformedAssignments[i].course, assignment: transformedAssignments[i].assignment, dueDate: transformedAssignments[i].dueDate, completed: false};
          notCompleted.push(notComplete);
        }
      }
      this.completes = AlreadyCompleted;
      this.Assignments = notCompleted;
      this.AssignmentCompletedUpdated.next([...this.completes]);
      this.AssignmentUpdated.next([...this.Assignments]);
    });
  }

  getAssignmentUpdatedListener(){
    return this.AssignmentUpdated.asObservable();
  }
  getAssignmentCompletedUpdatedListener(){
    return this.AssignmentCompletedUpdated.asObservable();
  }

  addAssignment(course:String, 
                assignment: String,
                dueDate: String,
                completed: boolean){
    const task = {id: "", course:course, assignment: assignment, dueDate: dueDate, completed: completed};
    //connecting to the service
    this.http.post<{message: string}>("http://localhost:3000/api/assignments", task).subscribe((responseData)=> {
        console.log(responseData.message);
        this.Assignments.push(task);
        this.AssignmentUpdated.next([...this.Assignments]);
    });  
  }

  completeAssignment(id: string, 
                     course: String,
                     assignment: String,
                     dueDate: String,
                     completed: boolean) {
    const completedAssignment = {id: id,
                        course: course,
                        assignment: assignment,
                      dueDate: dueDate,
                      completed: completed};
     console.log(completedAssignment.course);
    this.http.put<{message: string}>("http://localhost:3000/api/assignments/" + id, completedAssignment).subscribe((responseData) => {  
      console.log(responseData.message);
    });
     }


}
