import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AssignmentCreateComponent } from "./assignment/assignment-create/assignment-create.component";
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { TimerItselfComponent } from './timer-itself/timer-itself.component';
import { CountdownModule } from 'ngx-countdown';
import { HomeComponent } from './home/home.component';
// import { CalendarComponent } from './calendar/calendar.component';

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
    CourseListComponent,
    CourseCreateComponent,
    HeaderComponent,
    LoginComponent,
    AssignmentCreateComponent,
    AssignmentListComponent,
    TimerItselfComponent,
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule,
    FullCalendarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
