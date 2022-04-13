import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseCreateComponent } from '../course-create/course-create.component';
import { CoursesService} from '../courses.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent  implements OnInit, OnDestroy{

  courses: Course[] = [];
  private courseSub: Subscription;
  isShown: boolean = false;

  constructor( private coursesService: CoursesService) { }

  ngOnInit(){
    this.coursesService.getCourses();
    this.courseSub = this.coursesService.getCoursesUpdateListener().subscribe((courses: Course[]) => {
      console.log(courses);
      this.courses = courses;
      console.log(this.courses);
    });
  }
  ngOnDestroy(){
    this.courseSub.unsubscribe(); 
  }
  toggleShow(){
    this.isShown = ! this.isShown;
  }

  get Courses(){
    return this.courses;
  }
  addCourse(){
  }
}
