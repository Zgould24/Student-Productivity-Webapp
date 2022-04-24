import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    // works a lot like a middleware.
    intercept(req: HttpRequest<any>, next: HttpHandler){
        const authToken = this.authService.getToken();
        const authReq = req.clone({
            headers: req.headers.set('Authorization',"Bearer " + authToken)
        });
        return next.handle(authReq);
    }
}