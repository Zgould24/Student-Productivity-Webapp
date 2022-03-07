import { Component } from "@angular/core";

@Component({
  selector: 'app-timer-itself',
  templateUrl: './timer-itself.component.html'


})

export class TimerItselfComponent{

  newTime = 0;
  onSetTimer(newTimeInput: HTMLTextAreaElement) {
    this.newTime= parseInt(newTimeInput.value);
  }
}


