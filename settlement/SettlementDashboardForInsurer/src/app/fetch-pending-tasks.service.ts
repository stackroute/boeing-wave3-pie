import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PendingTasks } from './pending-tasks';

@Injectable({
  providedIn: 'root'
})
export class FetchPendingTasksService {

  settlementUrl = "http://localhost:8092/settlement/api/v1/";
  fetchAllPortingRequestsUrl = "pendingtasks/";
  constructor(private httpClient: HttpClient) { }
  fetchAllPortingRequests(currentCompanyName): Observable<PendingTasks> {
    return this.httpClient.get<PendingTasks>(this.settlementUrl + this.fetchAllPortingRequestsUrl + currentCompanyName);
  }
}
