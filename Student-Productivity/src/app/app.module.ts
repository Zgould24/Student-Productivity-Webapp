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


@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    NavbarComponent,
    CourseCreateComponent,
    CourseListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
