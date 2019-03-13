import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Email} from './email';
// import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  httpOptions = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Origin':'*',
      Authorization: "my-auth-token"
    })
  };
  constructor(private httpClient: HttpClient) {

   }
   sendEmail(email: Email): Observable<Email> {
      return this.httpClient.post<Email>("http://13.126.73.190:8092/email/api/v1/email/", email, this.httpOptions);
   }
}
