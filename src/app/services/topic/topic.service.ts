import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *as featureInterface from '../interfaces/interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<any>(featureInterface.topicList);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.topicAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.topicDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.topicUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   } 

   addVideo(data: any, id:any): Observable<any>{
    return this.http.post<any>(`${featureInterface.addVideo}/${id}`, data);
   }

  }