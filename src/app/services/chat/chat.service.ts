import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import *as featureInterface from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private _refreshrequire= new Subject<void>();
  get Refreshrequired(){
    return this._refreshrequire;
  }

  getList(): Observable<any>{
    return this.http.get<any>(featureInterface.chatlist);
   }

   addList(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.chatAdd, data);
   }

   deleteApi(data: any): Observable<any>{
    return this.http.delete<any>(`${featureInterface.chatDelete}/${data}`);
   }

   updateApi(id: any,data:any): Observable<any>{
    const apii =`${featureInterface.chatUpdate}/${id}`;
    // console.log(apii);
    return this.http.patch<any>(apii,data);
   }

  
   chatMessangerList(data: any): Observable<any>{
    return this.http.get<any>(`${featureInterface.ChatMessageList}/${data}`);
   }

   sendMessageAdmin(data: any): Observable<any>{
    return this.http.post<any>(featureInterface.chatAdminPost, data).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      } )
    )
   }

}
