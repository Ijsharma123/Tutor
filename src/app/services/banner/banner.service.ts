import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import *as featureInterface from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(featureInterface.bannerList);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.bannerAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.bannerDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.bannerUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }
  
}
