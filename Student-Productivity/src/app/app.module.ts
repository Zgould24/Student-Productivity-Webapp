import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CountdownModule } from 'ngx-countdown';
import { TimerItselfComponent } from './timer/timer-itself/timer-itself.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    NavbarComponent,
    TimerItselfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
