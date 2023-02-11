import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(featureInterface.subjectList);
   }
   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.subjectAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.subjectDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.subjectUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }
}
