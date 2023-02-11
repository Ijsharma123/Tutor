import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class SetListService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(featureInterface.setList);
   }

   setList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.setAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.setDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.setUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }
  
}