import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PendingTasks } from './pending-tasks';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class FetchPendingTasksService {

  settlementUrl = "http://localhost:8092/settlement/api/v1/";
  fetchAllPortingRequestsUrl = "pendingtasks/";
  addANewPendingTaskUrl = "pendingtask/"



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private httpClient: HttpClient) { }
  fetchAllPortingRequests(currentCompanyName): Observable<PendingTasks[]> {
    return this.httpClient.get<PendingTasks[]>(this.settlementUrl + this.fetchAllPortingRequestsUrl + currentCompanyName);
  }
  addANewPendingTask(pendingtasksId: number, newTask: Task): Observable<PendingTasks>{
    return this.httpClient.post<PendingTasks>(this.settlementUrl + this.addANewPendingTaskUrl + pendingtasksId, newTask, this.httpOptions);
  }
}
