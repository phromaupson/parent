import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  endpoint = '/api'

  constructor(public http:HttpClient) { }

  getDataFromBackend(params:{b:number}):Observable<{message:string}>{
    return this.http.get<{message:string}>('http://localhost:3333'+this.endpoint,{params })
  }

  getDataFromBackendPost(params:{a:number}):Observable<{message:string}>{
    return this.http.post<{message:string}>('http://localhost:3333'+this.endpoint,{params})
  }
}
