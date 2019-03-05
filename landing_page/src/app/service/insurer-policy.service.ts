import { PolicyPremium } from './../policy-premium';
import { PolicyFormInfo } from './../components/policyStore/policy-form-info';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
 headers: new HttpHeaders({
   'Access-Control-Allow-Origin':'*',

 })
};



@Injectable({
 providedIn: 'root'
})
export class InsurerPolicyService {

 constructor(private http: HttpClient) { }

 localUrl = 'http://13.126.73.190:8092/insurerregservice/api/v1/';
 policiesUrl = 'http://localhost:8097/api/v1/';



 addNewPolicy(policy : PolicyFormInfo):Observable<Object> {
   console.log('adadsasdas')
  return this.http.put(this.localUrl+ 'policy/newpolicy',policy);
 }

 getPolicies(insurerLicense : String):Observable<Object> {
   console.log('adadsasdas')
  return this.http.get(this.policiesUrl+'policy/'+insurerLicense);
 }

 getPremium(premium : PolicyPremium):Observable<Object> {
  console.log('adadsasdas')
 return this.http.post('http://13.126.73.190:8092/calculator/api/auth'+ '/policy/premium/calculator',premium);
}


 deletePolicy(insurerName,policyId):Observable<Object>{
   console.log(insurerName);
   console.log(policyId);
   return this.http.put(this.localUrl+'policy/delete/'+insurerName+'/'+policyId,0);

 }
}
