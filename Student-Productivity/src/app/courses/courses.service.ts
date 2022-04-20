import { Injectable } from '@angular/core';
import { Course} from '../models/course';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private Courses: Course[] = [];
  private CoursesUpdated = new Subject<Course[]>();


  constructor( private http: HttpClient) { }

  getCourses(){
    return [...this.Courses];
  }
  getCoursesUpdateListener(){
    return this.CoursesUpdated.asObservable();
  }

  getCourse(id: string){
    return this.Courses.filter( c => c.id === id)[0];
  }

  addCourse(title: string, instructorName: string, classTime: string[], officeHours: string[], courseMemo: string){
    const course = {id:"", title: title, instructorName: instructorName, classTime: classTime, officeHours: officeHours, CourseMemo: courseMemo};
    // this.http.post<{message: string}>("http://localhost:3000/api/courses", course)
    // .subscribe((responseData)=> {
    //     console.log(responseData.message);
        
    // });

        this.Courses.push(course);
        this.CoursesUpdated.next([...this.Courses]);
  }
}
