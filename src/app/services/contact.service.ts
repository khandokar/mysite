import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://5im0n1cx5b.execute-api.us-east-1.amazonaws.com/V1/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}