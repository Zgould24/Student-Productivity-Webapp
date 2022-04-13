import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  courseForm: FormGroup;
  
  constructor(private fb:FormBuilder,
    private coursesService: CoursesService){}

   classTimes(): FormArray {
     return this.courseForm.get('ClassTimes') as FormArray;
   }
   OfficeHours(): FormArray {
     return this.courseForm.get('OfficeHours') as FormArray;
   }
   newClassTime(): FormGroup {
     return this.fb.group({
        time: ''
     });
    // return new FormControl('');
   }
   newOfficeHour(): FormGroup{
    return this.fb.group({
      time: ''
    });
    // return new FormControl('');
   }

  
   addClassTime() {
     this.classTimes().push(this.newClassTime());
   }

   addOfficeHour(){
    this.OfficeHours().push(this.newOfficeHour());
   }

   removeClassTime(i: number){
    this.classTimes().removeAt(i);
   }

   removeOfficeHour(i: number){
    this.OfficeHours().removeAt(i);
   }


   ngOnInit(){
     this.courseForm = this.fb.group({
      CourseTitle: ['', Validators.required],
      InstructorName: ['', Validators.required],
      ClassTimes: this.fb.array([]),
      OfficeHours: this.fb.array([]),
      CourseMemo: ['']
    });
   }

   onSubmit(){

      if (this.courseForm.invalid){
        return;
      }
      const classMeetTime = this.classTimes().value;
      const officeHours = this.OfficeHours().value;
      let meetTimes: string[] = [];
      let officehours: string[] = [];
    

      // const meetTimes: string | unknown[] = [];

      if (classMeetTime ===  undefined){
         return;
      } 

      // console.log(classMeetTime['time']);
      for (let i = 0; i < classMeetTime.length; i++){
        const mt = classMeetTime.at(i) as FormGroup;
        console.log(typeof Object['values'](mt)[0]);
        meetTimes.push(Object['values'](mt)[0]);
        // meetTimes[i] = mt
      }
    
      if (officeHours === undefined) {
        console.log("No office hours detected.");;
      }
      
      for (let i = 0; i < officeHours.length; i++){
        const oh = officeHours.at(i) as FormGroup;
        officehours.push(Object['values'](oh)[0]);
      }

       this.coursesService.addCourse(this.courseForm.controls['CourseTitle'].value, this.courseForm.controls['InstructorName'].value, meetTimes, officehours, this.courseForm.controls['CourseMemo'].value);
      this.courseForm.reset();
   }
}
