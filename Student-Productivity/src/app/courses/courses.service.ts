import { Injectable } from '@angular/core';
import { Course} from '../models/course';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private Courses: Course[] = [];
  private CoursesUpdated = new Subject<Course[]>();
  private CourseListEmpt = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getCourses(){
    this.http.get<{message: string, courses: any}>("http://localhost:3000/api/courses").pipe(map((CourseData)=> {
      return CourseData.courses.map(course =>{
        console.log(course);
        return {
          id: course._id,
          title: course.title,
          instructorName: course.instructorName,
          classTime: course.classTime,
          officeHours: course.officeHours,
          CourseMemo: course.CourseMemo
        };
      })
    }))
    .subscribe(transformedCourses => {
      this.Courses = transformedCourses;
      if (this.Courses.length === 0){
        this.CourseListEmpt.next(true);
      } else {
        this.CourseListEmpt.next(false);
      }
      this.CoursesUpdated.next([...this.Courses]);
      
    });
    // return [...this.Courses];
  }
  getCoursesUpdateListener(){
    return this.CoursesUpdated.asObservable();
  }

  getCourse(id: string){
    // return this.Courses.filter( c => c.id === id)[0];
    return this.http.get<{_id: string, title: string, instructorName: string, 
      classTime: string[], officeHours: string[], CourseMemo: string
    }>("http://localhost:3000/api/courses/" + id);
  }

  updateCourse(courseId: string,
               title: string,
               instructorName: string, 
               classTime: string[],
               officeHours: string[],
               CourseMemo: string){

    const course = {id: courseId, title: title, instructorName: instructorName, classTime: classTime, officeHours: officeHours, CourseMemo: CourseMemo}; 
    this.http.put("http://localhost:3000/api/courses/" + courseId, course).subscribe(response => {
              const updatedCourses = [...this.Courses];
              const oldCourseIndex = updatedCourses.findIndex(c => c.id === course.id);
              updatedCourses[oldCourseIndex] = course;
              this.Courses = updatedCourses;
              this.CoursesUpdated.next([...this.Courses]);
    });
  }

  addCourse(title: string, instructorName: string, classTime: string[], officeHours: string[], courseMemo: string){
    const course = {id:"", title: title, instructorName: instructorName, classTime: classTime, officeHours: officeHours, CourseMemo: courseMemo};
    this.http.post<{message: string}>("http://localhost:3000/api/courses", course)
    .subscribe((responseData)=> {
        console.log(responseData.message);
        this.Courses.push(course);
        this.CoursesUpdated.next([...this.Courses]);
    });
  }

  deleteCourse(id:string){
    this.http.delete("http://localhost:3000/api/courses/" + id).subscribe(
        (responseData) => {
          // console.log(responseData.message);
          const updatedCourses = this.Courses.filter(course => course.id !== id);
          this.Courses = updatedCourses;
          this.CoursesUpdated.next([...this.Courses]);
        });
     
  }
}
