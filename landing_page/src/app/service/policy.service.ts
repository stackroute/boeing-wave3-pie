
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };
  // public policyDetailsUrl = 'http://localhost:8097/api/v1/policy/';
  policyDetails:any;
  constructor(private http: HttpClient) {
    console.log('http service got called');
  }
  public getPolicyDetails(insurerName,policyName): any {
    console.log("inside service");
    // this.policyDetails = this.http.get('http://localhost:8097/api/v1/policy/MaxBupa/CancerPolicy');
    return this.http.get('http://localhost:8097/api/v1/policy/reliance1234/CancerPolicy', this.httpOptions);
}

  public buyPolicy(insurername,policyname,insuredname): any {
    console.log('inside buy policy');
    console.log('http://localhost:8097/api/v1/policy/reliance1234/CancerPolicy/Mahanth');
    let as = this.http.put('http://localhost:8097/api/v1/policy/reliance1234/CancerPolicy/Mahanth',0);
    return as;
  } 
}
