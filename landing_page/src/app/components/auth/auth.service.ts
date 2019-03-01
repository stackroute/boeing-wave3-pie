import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
<<<<<<< HEAD
  private loginUrl = 'http://13.126.73.190:8092/commonauth/api/auth/signin';
  private signupUrl = 'http://13.126.73.190:8092/userreg/api/auth/signup';
=======
  // private loginUrl = 'http://13.126.73.190:8092/commonauth/api/auth/signin';
  private loginUrl = 'http://172.23.239.82:8096/api/auth/signin';
  private signupUrl = 'http://172.23.239.138:8093/api/auth/signup';
>>>>>>> bace0326d0c99d4d03ebcae9cd940c01b442b45c
  // private loginUrl = 'http://localhost:8093/api/auth/signin';
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

<<<<<<< HEAD

  constructor(private http: HttpClient) {
=======
  constructor(private http: HttpClient, private router: Router) {
>>>>>>> bace0326d0c99d4d03ebcae9cd940c01b442b45c
  }
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    this.loggedIn.next(true);
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
