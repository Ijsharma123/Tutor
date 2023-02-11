import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import *as featureInterface from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class LiveclassService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<any>(featureInterface.meetinglist);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.meetingAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.meetingDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.meetingUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }
}
