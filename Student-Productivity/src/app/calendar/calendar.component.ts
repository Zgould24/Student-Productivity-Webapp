// In order to supress the error message do "npm install --save @fullcalendar/angular @fullcalendar/daygrid"

import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';
import { Assignment } from '../models/assignment';
import { AssignmentsService } from '../assignment/assignments.service';
import { Subscription } from 'rxjs';
// import { Event } from '@fullcalendar/angular';
// import {dayGridPlugins} from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit { 

   private Events: any[] =[];
   private eventsSub: Subscription;
  // calendarPlugins=
   calendarOptions: CalendarOptions; 
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   },
  //   initialView: 'dayGridMonth',
  //   weekends: true,
  //   editable: true,
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true,
  //   events:[]
  // }
  title = 'Calendar';

  constructor(private httpClient:HttpClient, private assignmentsService: AssignmentsService) {
    // this.calendarOptions.addEvent();
   }
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {

    this.assignmentsService.getAssignments();
    this.eventsSub = this.assignmentsService.getAssignmentUpdatedListener().subscribe((assignments: Assignment[])=> {
      if (assignments.length === 0){
      } else {
        for (let i = 0; i < assignments.length; i++) {
          this.Events.push({title: assignments[i].assignment, start: assignments[i].dueDate});
        }
        
      this.calendarOptions = {
      headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: this.Events
      };
      console.log(this.calendarOptions.events);

      }
    })
  //  setTimeout(() => {
     
  //     console.log(this.calendarOptions.events);
  //   }, 1100);

    // commented out: talked to Nicole
    // setTimeout(() => {
    //   return this.httpClient
    //     .get('http://localhost:8888/event.php')
    //     .subscribe((res: any) => {
    //       this.Events.push(res);
    //       console.log(this.Events);
    //     });
    // }, 2200);
    // setTimeout(() => {
    //   this.calendarOptions = {
    //     initialView: 'dayGridMonth',
    //     dateClick: this.onDateClick.bind(this),
    //     events: this.Events
    //   };
    // }, 2500);
  }
}