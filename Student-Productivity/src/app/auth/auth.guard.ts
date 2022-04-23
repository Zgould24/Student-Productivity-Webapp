import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from './auth.service';

// canActivate prevents the augular from proceeding to go to the route before being authenticated. 
@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){

    }
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean>|Promise<boolean> {
      const isAuth = this.authService.getIsAuth();
      // we want to re-direct away when authentication failed. 
      if (!isAuth) {
          this.router.navigate(['/login']);
      }
    return isAuth;
  }
}