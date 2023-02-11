import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import *as featureInterface from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  // url= 'http://localhost:3000/admin/login';
  // url='http://18.217.204.81:3000/admin/login';
  constructor(private http: HttpClient) {
  }

  getLogin(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.login, data);
   }
   
  //  termConditions(): Observable<any> {
  //   return this.http.get<any>(this.url2);
  // }

   isLoggedIn(){
    return localStorage.getItem('token')!=null;   //it will return false otherWise its will be true
   }
}
