import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  //Allows user to navigate to the registration form from the login screen
  goToCreateAccount() {
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    document.addEventListener("click", e => {
      e.preventDefault();
      loginRef?.classList.add("hide-login-container");
      createRef?.classList.remove("hide-create-account");
    })
  }

  //Allows user to navigate back to login screen if registration isn't necessary
  goToLogin() {
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    document.addEventListener("click", e => {
      e.preventDefault();
      loginRef?.classList.remove("hide-login-container");
      createRef?.classList.add("hide-create-account");
    })
  }

  //Displays an error to the user stating their username/password combination is invalid
  //
  //DEFAULT VALUES FOR LOGIN --> username = "0" password = "0"
  //Error will display if the user has entered nothing into the username and password boxes
  showLoginError() {
    let userInfo = (<HTMLInputElement>document.getElementById("user-info")).value;
    let passInfo = (<HTMLInputElement>document.getElementById("password-info")).value;
    let error = document.getElementById("login-error");
    
    document.addEventListener("click", e => {
      e.preventDefault();
      if(userInfo === '0' && passInfo === "0") {
        error?.classList.add("hide-login-error");
      }  else {
        error?.classList.remove("hide-login-error");
      }
    })
  }
}
