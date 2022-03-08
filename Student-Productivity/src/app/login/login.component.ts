import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  exampleUser = new User("Zachary", "Gould", "zgould24@gmail.com", "zgould24", "123456789");
  emptySignUp = false;

  constructor() {
  }

  ngOnInit() {

  }

  emailExistValidator(control: FormControl) {
    let email = control.value;

  }

  //Allows user to navigate to the registration form from the login screen
  goToCreateAccount(e:Event) {
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    loginRef?.classList.add("hide-login-container");
    createRef?.classList.remove("hide-create-account");
  }

  //Allows user to navigate back to login screen if registration isn't necessary
  goToLogin(e: Event) {
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    e.preventDefault();
    loginRef?.classList.remove("hide-login-container");
    createRef?.classList.add("hide-create-account");
  }

  //Displays an error to the user stating their username/password combination is invalid
  //
  //DEFAULT VALUES FOR LOGIN --> username = "0" password = "0"
  //Error will display if the user has entered nothing into the username and password boxes
  showLoginError(e: Event) {
    let userInfo = (<HTMLInputElement>document.getElementById("user-info"));
    let passInfo = (<HTMLInputElement>document.getElementById("password-info"));
    let error = document.getElementById("login-error");

    e.preventDefault();
  
    if(userInfo.value === '0' && passInfo.value === "0") {
      error?.classList.add("hide-login-error");
      userInfo.style.borderColor = "rgb(141, 141, 141)";
      passInfo.style.borderColor = "rgb(141, 141, 141)";
    }  else {
      error?.classList.remove("hide-login-error"); 
      userInfo.style.borderColor = "red";
      passInfo.style.borderColor = "red";
    }
    
  }
}
