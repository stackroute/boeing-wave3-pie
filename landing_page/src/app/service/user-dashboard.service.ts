import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  public localMongoUrl = 'http://13.126.73.190:8090/api/auth/requests/';
 public recommendationsUrl = 'http://172.23.239.158:8086/rest/neo4j/recommendations/policyByAgeGender/28/female';
 public profileUrl = 'http://13.126.73.190:8092/userreg/api/auth/profile/';
 public policiesUrl = 'http://localhost:8093/api/auth/policy/display/Anusha';
 constructor(private http: HttpClient) {
   console.log('http service got called');
 }
   public getRequests(userId): any {
     console.log( userId);
     const requests = this.http.get(this.localMongoUrl + userId);
     console.log(requests);
     return requests;
   }
   public getRecommendations(userId): any {
     console.log(userId);
     const recommendations = this.http.get(this.recommendationsUrl );
     return recommendations;
   }
   public getPolicies(username): any {
    console.log(username);
    const policies = this.http.get(this.policiesUrl );
    return policies;
  }
   public getProfile(username): any {
     console.log('service' + username);
     const profile = this.http.get(this.profileUrl);
     console.log('after');
     return profile;
   }
   public updateProfile(username, form): any {
     console.log('service' + username);
     const profile = this.http.put(this.profileUrl + username,form);
     console.log('after');
     return profile;
   }
}
