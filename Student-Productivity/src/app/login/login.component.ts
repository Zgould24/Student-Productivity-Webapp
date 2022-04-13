
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Account } from '../login/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: FormGroup;
  login: FormGroup;
  loginAccount: Account;
  test:Account;

  constructor(private router:Router, private loginService: LoginService) {}

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.account = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  addAccount() {
    if(this.account.invalid) {
      return;
    }
    this.loginService.addAccount(this.account.get('firstname')?.value, this.account.get('lastname')?.value, this.account.get('email')?.value, this.account.get('username')?.value, this.account.get('password')?.value);
    this.account.reset;
  }

  //Allows user to navigate to the registration form from the login screen
  goToCreateAccount() {
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    loginRef?.classList.add("hide-login-container");
    createRef?.classList.remove("hide-create-account");
  }

  //Allows user to navigate back to login screen if registration isn't necessary
  goToLogin() {
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    loginRef?.classList.remove("hide-login-container");
    createRef?.classList.add("hide-create-account");
  }

  //Displays an error to the user stating their username/password combination is invalid
  //
  //DEFAULT VALUES FOR LOGIN --> username = "0" password = "0"
  //Error will display if the user has entered nothing into the username and password boxes
  showLoginError() {
    let userInfo = (<HTMLInputElement>document.getElementById("user-info"));
    let passInfo = (<HTMLInputElement>document.getElementById("password-info"));
    let error = document.getElementById("login-error");

    if(userInfo.value === '0' && passInfo.value === "0") {
      error?.classList.add("hide-login-error");
      userInfo.style.borderColor = "rgb(61, 90, 128)";
      passInfo.style.borderColor = "rgb(61, 90, 128)";

      this.router.navigateByUrl('/home');
    }  else {
      error?.classList.remove("hide-login-error"); 
      userInfo.style.borderColor = "red";
      passInfo.style.borderColor = "red";
    }
  }

  showCreateAccountError() {
    let fn = (<HTMLInputElement>document.getElementById("f_name"));
    let ln = (<HTMLInputElement>document.getElementById("l_name"));
    let e = (<HTMLInputElement>document.getElementById("email"));
    let p = (<HTMLInputElement>document.getElementById("pass"));
    let cp = (<HTMLInputElement>document.getElementById("c_pass"));

    if(!fn.value || !ln.value || !e.value || !p.value || !cp.value) {
      if(!fn.value) {fn.style.borderColor = "red"} else(fn.style.borderColor = "rgb(61, 90, 128)");
      if(!ln.value) {ln.style.borderColor = "red"} else(ln.style.borderColor = "rgb(61, 90, 128)");
      if(!e.value) {e.style.borderColor = "red"} else(e.style.borderColor = "rgb(61, 90, 128)");
      if(!p.value) {p.style.borderColor = "red"} else(p.style.borderColor = "rgb(61, 90, 128)");
      if(!cp.value) {cp.style.borderColor = "red"} else(cp.style.borderColor = "rgb(61, 90, 128)");
    }  else if(p.value != cp.value) {
      if(!fn.value) {fn.style.borderColor = "red"} else(fn.style.borderColor = "rgb(61, 90, 128)");
      if(!ln.value) {ln.style.borderColor = "red"} else(ln.style.borderColor = "rgb(61, 90, 128)");
      if(!e.value) {e.style.borderColor = "red"} else(e.style.borderColor = "rgb(61, 90, 128)");
      p.style.borderColor = "red";
      cp.style.borderColor = "red";
    }  else {
      console.log(this.account.get('firstname')?.value + "\n"
                + this.account.get('lastname')?.value + "\n"
                + this.account.get('email')?.value + "\n"
                + this.account.get('username')?.value + "\n"
                + this.account.get('password')?.value + "\n"
                + this.account.get('confirmPassword')?.value);
      this.addAccount();
      this.router.navigateByUrl('/home');
    }
  }
}
