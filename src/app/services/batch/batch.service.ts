import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<any>(featureInterface.batchList);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.batchAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.batchDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.batchUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }

}
