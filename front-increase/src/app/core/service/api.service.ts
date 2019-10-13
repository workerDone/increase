import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.url}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.url}${path}`, body);
  }

  post<T>(path: string, body: T): Observable<any> {
    return this.http
      .post(`${environment.url}${path}`, body);
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.url}${path}`);
  }
}
