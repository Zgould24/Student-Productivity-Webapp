import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { CoursesService } from '../courses.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Course } from '../../models/course';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  private mode: string;
  private courseId: string;
  private course: Course;

  courseForm: FormGroup;
  

  constructor(private fb:FormBuilder,
    private coursesService: CoursesService,
    private route: ActivatedRoute){}

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

   loadClassTime(time: string){
     this.classTimes().push(this.fb.group({time: time}));
   }
   
   loadOfficeHour(time: string){
     this.OfficeHours().push(this.fb.group({time: time}));
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


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('courseId')){
        console.log('we are in editing mode.')
        this.mode = 'edit';
        const paramList = paramMap.getAll('courseId');
        this.courseId = paramList[0];
        this.coursesService.getCourse(this.courseId).subscribe(courseData => {
        this.course = { id: courseData._id, 
                        title: courseData.title,
                        instructorName: courseData.instructorName,
                        classTime: courseData.classTime,
                        officeHours: courseData.officeHours,
                        CourseMemo: courseData.CourseMemo};
        console.log(this.course.classTime);
        this.courseForm.get('CourseTitle')?.setValue(this.course.title);
        this.courseForm.get('InstructorName')?.setValue(this.course.instructorName);
        this.courseForm.get('CourseMemo')?.setValue(this.course.CourseMemo);
         for (let i = 0; i < this.course.classTime.length; i++){
           this.loadClassTime(this.course.classTime[i]);
         }
         for (let i = 0; i < this.course.officeHours.length; i++){
          this.loadOfficeHour(this.course.officeHours[i]);
         }  });

 
      } else {
        this.mode = 'create';
        this.courseId='';
      }
    })
   }

   onSubmit(){
      if (this.courseForm.invalid){
        return;
      }
      const classMeetTime = this.classTimes().value;
      const officeHours = this.OfficeHours().value;
      let meetTimes: string[] = [];
      let officehours: string[] = [];
      if (classMeetTime ===  undefined){
         return;
      } 
      for (let i = 0; i < classMeetTime.length; i++){
        const mt = classMeetTime.at(i) as FormGroup;
        console.log(typeof Object['values'](mt)[0]);
        meetTimes.push(Object['values'](mt)[0]);
        
      }
      if (officeHours === undefined) {
        console.log("No office hours detected.");;
      }
      for (let i = 0; i < officeHours.length; i++){
        const oh = officeHours.at(i) as FormGroup;
        officehours.push(Object['values'](oh)[0]);
      }

      if (this.mode === 'create'){
        this.coursesService.addCourse(this.courseForm.controls['CourseTitle'].value, this.courseForm.controls['InstructorName'].value, meetTimes, officehours, this.courseForm.controls['CourseMemo'].value);
      } else {
       this.coursesService.updateCourse(this.courseId,this.courseForm.controls['CourseTitle'].value,this.courseForm.controls['InstructorName'].value, meetTimes, officehours, this.courseForm.controls['CourseMemo'].value);
      }
       
      this.courseForm.reset();
   }
}
