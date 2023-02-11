import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class QuestionlistService {

  constructor(private http: HttpClient) { }

  getList(data:any): Observable<any>{
    return this.http.post<any>(featureInterface.questionList,data);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.questionAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.questionDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.questionUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }
  
}