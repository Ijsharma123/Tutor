import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }

  getClass(): Observable<any>{
    return this.http.get<any>(featureInterface.allClass);
   }

}
