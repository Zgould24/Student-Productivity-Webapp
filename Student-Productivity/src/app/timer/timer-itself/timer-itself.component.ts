import { Component } from "@angular/core";
/*import { isNumeric } from 'rxjs/util/isNumeric';
*/

@Component({
  selector: 'app-timer-itself',
  templateUrl: './timer-itself.component.html' ,
  styleUrls:  ['./timer-itself.component.css']
})

export class TimerItselfComponent{
  
  /* handles all timer functionality
  */

  newTime = 0;
  newHours = 0;
  newMinutes= 0;
  newSeconds= 0;
  overallTime=0;
  newError='';

  /* takes user-inputted integer, converts from respective value (hours, minutes, seconds) into ngx-timer's unit of seconds, then
     sets timer equal to the amount of converted seconds
  */
  
  onSetTimer(newTimeInput: HTMLTextAreaElement) {
    this.newTime= parseInt(newTimeInput.value);
  }
  onSetTimer2(newHoursInput: HTMLTextAreaElement, newMinutesInput: HTMLTextAreaElement, newSecondsInput: HTMLTextAreaElement) {
    /*check value and make sure it is not invalid
    */

   if (isNaN(parseInt(newHoursInput.value)) == true) {
      /*error message*/

      this.newError = 'must enter valid integer';
      return;
     
    }

  /*this.newError = 'STOP';
    /*
    number restriction, so user cannot enter more than twenty-four hours into the timer
    */

    this.newError = '';

    if (parseInt(newMinutesInput.value) > 60) {
      newMinutesInput.value = '60';
    }
    if (parseInt(newSecondsInput.value) > 60) {
      newSecondsInput.value = '60';
    }

    /* the actual input conversion  */
    
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


