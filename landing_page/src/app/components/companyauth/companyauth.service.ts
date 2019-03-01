import { JwtResponse } from './companyjwt-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { PolicyFormInfo } from '../policyStore/policy-form-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CompanyAuthService {
  private signupUrl = 'http://172.23.239.82:8090/api/v1/signup';
  private addPolicyUrl = 'http://172.233.239.82:8090/api/v1/policy/newpolicy';

  constructor(private http: HttpClient) {
  }
  // attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
  //   return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  // }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  addPolicy(policy: PolicyFormInfo): Observable<PolicyFormInfo> {
    return this.http.put<PolicyFormInfo>(this.addPolicyUrl, policy, httpOptions);
  }
}
