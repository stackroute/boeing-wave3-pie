import { Component, OnInit } from "@angular/core";
import { FetchPendingTasksService } from "../fetch-pending-tasks.service";
import { PendingTasks } from "../pending-tasks";
import { Task } from "../task";

@Component({
  selector: "app-all-porting-requests",
  templateUrl: "./all-porting-requests.component.html",
  styleUrls: ["./all-porting-requests.component.css"]
})
export class AllPortingRequestsComponent implements OnInit {
  currentCompanyName: String;
  pendingTasks: PendingTasks[];
  newPendingTask: Task;
  currentInsuredName: string;
  fetchAllPortingRequestsIsClicked: Boolean;
  addANewPendingTaskIsClicked: Boolean;
  viewPendingTasksOfInsuredIsClicked: Boolean;
  fetchPendingTasksService: FetchPendingTasksService;
  constructor(fetchPendingTasksService: FetchPendingTasksService) {
    this.fetchPendingTasksService = fetchPendingTasksService;
  }

  ngOnInit() {
    this.currentCompanyName = null;
    this.fetchAllPortingRequestsIsClicked = false;
    this.viewPendingTasksOfInsuredIsClicked = false;
    this.addANewPendingTaskIsClicked = false;
  }
  fetchAllPortingRequests(currentCompanyName: string): void {
    this.fetchAllPortingRequestsIsClicked = true;
    this.fetchPendingTasksService
      .fetchAllPortingRequests(currentCompanyName)
      .subscribe(pendingTasks => (this.pendingTasks = pendingTasks));
  }
  viewPendingTasksOfInsured(insuredName: string): void {
    this.currentInsuredName = insuredName;
    this.viewPendingTasksOfInsuredIsClicked = true;
  }
  addANewPendingTask(): void {
    this.addANewPendingTaskIsClicked = true;
  }
  saveNewPendingTask(pendingTasksId: number): void {
    this.newPendingTask.taskStatus = false;
    this.fetchPendingTasksService
      .addANewPendingTask(pendingTasksId, this.newPendingTask)
      .subscribe();
  }
}
