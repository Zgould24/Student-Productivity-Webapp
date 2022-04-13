import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { CourseListComponent } from './courses/course-list/course-list.component';


import { CountdownModule } from 'ngx-countdown';
import { TimerItselfComponent } from './timer/timer-itself/timer-itself.component';

// Calendar imports
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin! (need to download)
import interactionPlugin from '@fullcalendar/interaction'; // a plugin! (need to download)

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    NavbarComponent,
    TimerItselfComponent,
    CourseCreateComponent,
    CourseListComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CountdownModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
