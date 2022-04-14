import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { CourseListComponent } from './courses/course-list/course-list.component';

=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent}
];
>>>>>>> a7762723f96a7a0a52ae7ea57bfbe01ab0616cf7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AssignmentComponent,
    NavbarComponent,
    CourseCreateComponent,
    CourseListComponent,

=======
    LoginComponent,
    HomeComponent,
    HeaderComponent
>>>>>>> a7762723f96a7a0a52ae7ea57bfbe01ab0616cf7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
=======
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
>>>>>>> a7762723f96a7a0a52ae7ea57bfbe01ab0616cf7
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
