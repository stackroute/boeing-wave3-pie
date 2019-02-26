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

 localUrl = 'http://localhost:8093/api/auth/';


 addNewPolicy(policy : PolicyFormInfo):Observable<Object> {
   console.log('adadsasdas')
  return this.http.put(this.localUrl+ 'policy/newpolicy',policy);
 }

 getPolicies(insurerLicense : String):Observable<Object> {
   console.log('adadsasdas')
  return this.http.get('http://localhost:8094/api/v1/'+ 'policy/external'+'/'+insurerLicense);
 }

//  getPolicies(insurerLicense : String):Observable<Object> {
//   console.log('adadsasdas')
//  return this.http.get(this.localUrl+ 'policy/display/'+insurerLicense);
// }


 deletePolicy(insurerName,policyId):Observable<Object>{
   console.log(insurerName);
   console.log(policyId);
   return this.http.put(this.localUrl+'policy/delete/'+insurerName+'/'+policyId,0);

 }
}