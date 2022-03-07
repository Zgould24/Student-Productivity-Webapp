import { Component } from "@angular/core";

@Component({
  selector: 'app-timer-itself',
  templateUrl: './timer-itself.component.html'


})

export class TimerItselfComponent{

  newTime = 0;
  newHours = 3;
  newMinutes=4;
  newSeconds=55;
  overallTime=0;

  onSetTimer(newTimeInput: HTMLTextAreaElement) {
    this.newTime= parseInt(newTimeInput.value);
  }
  onSetTimer2(newHoursInput: HTMLTextAreaElement, newMinutesInput: HTMLTextAreaElement, newSecondsInput: HTMLTextAreaElement) {
    this.newHours= 3600 * parseInt(newHoursInput.value);
    this.newMinutes=60 * parseInt(newMinutesInput.value);
    this.newSeconds=parseInt(newSecondsInput.value);
    this.overallTime= this.newHours + this.newMinutes + this.newSeconds;
  }

}


