import { Component, OnInit } from '@angular/core';
import { FetchPendingTasksService } from '../fetch-pending-tasks.service';
import { PendingTasks } from '../pending-tasks';

@Component({
  selector: 'app-all-porting-requests',
  templateUrl: './all-porting-requests.component.html',
  styleUrls: ['./all-porting-requests.component.css']
})
export class AllPortingRequestsComponent implements OnInit {

  currentCompanyName: String;
  pendingTasks: PendingTasks;
  fetchAllPortingRequestsIsClicked: Boolean;
  fetchPendingTasksService: FetchPendingTasksService;
  constructor(fetchPendingTasksService: FetchPendingTasksService) {this.fetchPendingTasksService = fetchPendingTasksService }

  ngOnInit() {
    this.currentCompanyName = null;
    this.fetchAllPortingRequestsIsClicked = false;
  }
  fetchAllPortingRequests(currentCompanyName): void{
    this.fetchAllPortingRequestsIsClicked = true;
    this.fetchPendingTasksService.fetchAllPortingRequests(currentCompanyName).subscribe(pendingTasks => this.pendingTasks = pendingTasks);
  }

}
