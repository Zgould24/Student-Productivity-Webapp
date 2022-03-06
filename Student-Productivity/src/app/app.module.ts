import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TimerItselfComponent} from './timer/timer-itself/timer-itself.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerItselfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
