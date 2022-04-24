import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authenticated = false;
  private showsErrorMessageSub:Subscription;
  private showsErrorMessage: boolean;
  private _logIn: FormGroup;
  private _createUser: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.showsErrorMessageSub = this.authService.getLogInErrorMessageListener().subscribe(isError => {
        this.showsErrorMessage = isError;
    });
    this._logIn = new FormGroup({
      "username" : new FormControl(),
      "password": new FormControl()
    });
    this._createUser = new FormGroup({
      "firstName": new FormControl(),
      "lastName": new FormControl(),
      "email": new FormControl(),
      "Username": new FormControl(),
      "password": new FormControl(),
      "confirm_password": new FormControl()
    });

  }

  get logInForm(){
    return this._logIn;
  }
  get createUserForm(){
    return this._createUser;
  }
  get showsErrorMes(){
    return this.showsErrorMessage;
  }
  goToCreateAccount(){
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");

    loginRef?.classList.add("hide-login-container");
    createRef?.classList.remove("hide-create-account");
  }
  goToLogin(){
    let loginRef = document.getElementById("login");
    let createRef = document.getElementById("create-account");
    // e.preventDefault();
    loginRef?.classList.remove("hide-login-container");
    createRef?.classList.add("hide-create-account");

  }

  onLogIn(){
    const username = this._logIn.get('username')?.value;
    const password = this._logIn.get('password')?.value;
    console.log(username);
    console.log(password);
    this.authService.logInUser(username,password);
  }

  onSignUp(){
    if (this._createUser.invalid){
      return ;
    } else {
      const firstName = this._createUser.get('firstName')?.value;
      const lastName = this._createUser.get('lastName')?.value;
      const email = this._createUser.get('email')?.value;
      const username = this._createUser.get('Username')?.value;
      const password = this._createUser.get('password')?.value;
      this.authService.createUser(firstName, lastName, email, username, password);
    }
    
  }

}
