import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

token:any;
  constructor(private loginService:LoginService,
    private route:Router) {
    this.token = localStorage.getItem('token');
    // console.log('token get local storage', this.token);
  }

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      
      if(!this.loginService.isLoggedIn()){
        this.route.navigate(['/']);
      }
      // else{
      //   this.route.navigate(['/dashboard']);
      // }
      if(request.url){
        if(request.url.indexOf('login_by_otp') >= 0 || request.url.indexOf('verify_otp') >=0 
        || request.url.indexOf('login') >=0 ){
          const cloned = request.clone({
            headers: request.headers
            // .set('No-Auth', 'True')
            .set('content-type', 'application/json')
          });
          return next.handle(cloned);
        } else{
          if(this.token) {
            const cloned = request.clone({
              headers: request.headers
              // .set('Authorization', 'Bearer ' + this.token)
              .set('Bearer', this.token)
              // .set('content-type', 'application/json')
            });
            return next.handle(cloned);
          }
        }
      }
      const cloned = request.clone({
        headers: request.headers
        .set('Bearer', this.token)
      });
      return next.handle(cloned);
  }
}
