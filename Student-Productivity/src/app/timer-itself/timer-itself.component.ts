import { Component } from "@angular/core";
// import { isNumeric } from 'rxjs/util/isNumeric';


@Component({
  selector: 'app-timer-itself',
  templateUrl: './timer-itself.component.html' ,
  styleUrls:  ['./timer-itself.component.css']
})

export class TimerItselfComponent{
  newTime = 0;
  newHours = 0;
  newMinutes= 0;
  newSeconds= 0;
  overallTime=0;
  newError='';

  onSetTimer(newTimeInput: HTMLTextAreaElement) {
    this.newTime= parseInt(newTimeInput.value);
  }
  onSetTimer2(newHoursInput: HTMLTextAreaElement, newMinutesInput: HTMLTextAreaElement, newSecondsInput: HTMLTextAreaElement) {
    /*check value and make sure it is not invalid
    */

   if (isNaN(parseInt(newHoursInput.value)) == true) {
      /*error message*/

      this.newError = 'Must enter valid integer';
      return;

    /*document.getElementById('newError')!.innerHTML = 'STOP';*/
    }

  /*this.newError = 'STOP';
    /*
    do the num restriction
    */

    this.newError = '';

    if (parseInt(newMinutesInput.value) > 60) {
      newMinutesInput.value = '60';
    }
    if (parseInt(newSecondsInput.value) > 60) {
      newSecondsInput.value = '60';
    }


    this.newHours= 3600 * parseInt(newHoursInput.value);
    this.newMinutes=60 * parseInt(newMinutesInput.value);
    this.newSeconds=parseInt(newSecondsInput.value);
    this.overallTime= this.newHours + this.newMinutes + this.newSeconds;
    if (this.overallTime > 86399) {
      this.overallTime = 86399;
    }
    this.newHours= 0;
    this.newMinutes= 0;
    this.newSeconds= 0;
  }

}


