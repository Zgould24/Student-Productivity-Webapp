import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService){}
  ngOnInit(){
    this.authService.autoAuthUser();
  }
}
