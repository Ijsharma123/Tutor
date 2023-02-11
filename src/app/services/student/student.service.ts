import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import *as featureInterface from '../interfaces/interface'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    // return this.http.get<any>(`${featureInterface.studenticList}/${id}`);
    return this.http.get<any>(`${featureInterface.studenticList}`);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.studentAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.studentDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.studentUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }
  
}
