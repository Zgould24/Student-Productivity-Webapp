import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userIsAuthenticated: boolean;
  private authenticationSubscription:Subscription;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authenticationSubscription = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      console.log(this.userIsAuthenticated);
    });
  }

  ngOnDestroy(){
  }

  onLogOut() {
    this.authService.logOut();
  }
  getUserIsAuthenticated (){
    return this.userIsAuthenticated;
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
