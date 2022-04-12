import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './login.model';
import { Subject } from 'rxjs';

// Injectable will put login.services in the "providers" section of app.module for services so that angular will read this file
@Injectable({providedIn: 'root'})
export class LoginService {
    private account: Account;
    private accountUpdated = new Subject<Account>();

    constructor(private http: HttpClient) {}

    // Notifies the server that a change has been made
    getLoginUpdateListener() {
      return this.accountUpdated.asObservable();
    }

    // Method that takes in passed parameters and assigns it to an object that will be passed to the database
    addAccount(firstname: string, lastname: string, email: string, username:string, password: string) {
      const accountCreate = {id: "", firstname: firstname, lastname: lastname, email: email, username: username, password: password};
      this.http.post<{message: string}>('http://localhost:3000/login', accountCreate).subscribe((responseData) => {
        console.log(responseData.message);
        this.account = accountCreate;
        this.accountUpdated.next(this.account);
      });
    }
}