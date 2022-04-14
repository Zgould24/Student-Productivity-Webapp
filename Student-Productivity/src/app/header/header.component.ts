import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import * as e from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

  displayOptions() {
    let logout = <HTMLInputElement> document.getElementById("options");

    if(logout.classList.contains("options")) {
      logout.classList.remove("options");
      logout.classList.add("hide");
    } else {
      logout.classList.remove("hide");
      logout.classList.add("options");
    }
  }

}
