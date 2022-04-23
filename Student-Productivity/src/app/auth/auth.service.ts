import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // data member
  private token: string;
  private userSessionTimer: ReturnType<typeof setTimeout>;
  private authStatusListener = new Subject<boolean>();
  private LogInErrorMessage = new Subject<boolean>();
  private isAuthenticated = false;
  private userId: string;
  private userName: string;
  constructor(private http: HttpClient, private router: Router) { }

//getters --------------------------------------------
  getToken(){
    return this.token;
  }
  getIsAuth(){
    return this.isAuthenticated;
  }
  getUserId(){
    return this.userId;
  }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getLogInErrorMessageListener(){
    return this.LogInErrorMessage.asObservable();
  }

//----------------------------------------------------- 

  private getAuthToken(){
    const token = localStorage.getItem('token');
    if (token === null){
      return;
    } else {
      return token;
    }
  }

  private getAuthExpirationDate(){
    const expirationDate = localStorage.getItem('expirationDate');
    if (!expirationDate){
      return 
    } else {
      return new Date(expirationDate);
    }
  }
  private getAuthUserId(){
    const userId = localStorage.getItem('userId');
    if (!userId){
      return 
    } else {
      return userId;
    }
  }


  createUser(firstName:string, 
             lastName: string,
             email: string, 
             username: string, 
             password: string) {

    const authData = {firstName: firstName, 
                      lastName: lastName, 
                      email: email, 
                      username: username, 
                      password: password };
    
    this.http.post("http://localhost:3000/api/user/signup", authData).subscribe(
      response => {
 
      console.log(response);
    }, err => {
      // this is to handle an server side error when the username or email already exists. 
      console.log(err);
      
    }
    );
  }

  logInUser(email: string, password: string){
    const AuthData = {email: email, password: password};
    this.http.post<{token: string, expiresIn: number, userId: string}>("http://localhost:3000/api/user/login", AuthData).subscribe(response => {
      console.log(response.token);
       const token = response.token;
      this.token = token;
       if (token){
        const userSessionDuration = response.expiresIn;
        this.setAuthTime(userSessionDuration);
        this.isAuthenticated = true;
        this.userId = response.userId;
        this.authStatusListener.next(true);
        this.LogInErrorMessage.next(false);
        const currentTime = new Date();
        const expirationDate = new Date(currentTime.getTime() + userSessionDuration * 1000);
        this.saveAuthData(token, expirationDate, this.userId);
        this.router.navigate(['/']);
       }}, 
       err => {
         console.log("Error Catched");
         this.isAuthenticated = false;
         this.LogInErrorMessage.next(true);
        //  this.authStatusListener.next(false);
          // this block handles error that occurs when user types in wrong credential. 
          console.log(err);
       })
  }
  autoAuthUser(){
    console.log("callign auto authentication");
    const authInfoToken = this.getAuthToken() || "INVTK";
    const authInfoExpirationDate = this.getAuthExpirationDate() || "INVDT";
    const authInfoUserId = this.getAuthUserId() || "INVUID";
    if (authInfoToken === "INVTK" || authInfoExpirationDate === "INVDT" || authInfoUserId === "INVUID") {
      this.logOut();
    } else {
      
    const now = new Date();
    const expiresIn = authInfoExpirationDate?.getTime() - now.getTime();
    if (expiresIn > 0) {
      console.log("token is not expired.");
      this.token = authInfoToken;
      this.isAuthenticated = true;
      this.userId = authInfoUserId;
      this.setAuthTime(expiresIn/ 1000);
      this.authStatusListener.next(true);
     }
    }
  }


  //log out methods
  logOut(){
    this.token = "";
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.userSessionTimer);
    this.userId = '';
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  // deleting authentication info off of the local storage. 
  private clearAuthData(){
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
  }


  // private methods related to authentications 

  private setAuthTime(duration: number){
        // when the timer expires, we want user to be logged out. 
      this.userSessionTimer = setTimeout(()=> {
        this.logOut(); 
      }, duration * 1000);
  }


  private saveAuthData(token: string, expirationDate: Date, userId: string){
    // localStorage is a general API call and parameter accept dictionary.
    localStorage.setItem('token', token, );
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userId', userId)
  }




}
