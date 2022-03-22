import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task!: String;
  resultTask!: String;
  date!: String;
  resultDate!: String;

  constructor(private http:HttpClient) {

  }

  deleteData() {
    
  }

  postData() {
    let url = "http://httpbin.org/post"

    this.http.post(url, {
      task:this.task,
      date:this.date
    }).toPromise().then((data:any) => {
      console.log(data)
      console.log(JSON.stringify(data.json.task))
      this.resultTask = JSON.stringify(data.json.task)
      this.resultDate = JSON.stringify(data.json.date)
    })

  }
}


