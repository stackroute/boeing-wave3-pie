import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PendingTasks } from '../pending-tasks';
import {Task} from '../task';
import {FetchPendingTasksService} from '../../service/fetch-pending-tasks.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-display-all-porting-requests',
  templateUrl: './display-all-porting-requests.component.html',
  styleUrls: ['./display-all-porting-requests.component.css']
})
export class DisplayAllPortingRequestsComponent implements OnInit {

@Input() pendingTasks: PendingTasks;
@Input() currentCompanyName: string;
@Input() currentInsuredName: string;
@Input() portingRequestId: number;
newPendingTasks: PendingTasks;
viewPendingTasksOfInsuredClicked: boolean;
newPendingTask: Task;
newPendingTaskName: string;
newPendingTaskDescription: string;
newPendingTaskDueDate: string;

@ViewChild(MatSort) sort: MatSort;
displayedColumns: string[] = ['taskColorStatus', 'taskName', 'taskDescription', 'taskStatus', 'dueDate', 'modifyStatusButton'];

dataSource = new MatTableDataSource<Task[]>();
// currentInsuredName: string;
fetchAllPortingRequestsIsClicked: Boolean;
addANewPendingTaskIsClicked: Boolean;
viewPendingTasksOfInsuredIsClicked: Boolean;
constructor(private fetchPendingTasksService: FetchPendingTasksService) {this.fetchPendingTasksService  = fetchPendingTasksService}

ngOnInit() {
  this.viewPendingTasksOfInsuredClicked = false;
  this.dataSource =   <MatTableDataSource<Task[]>> <any> this.pendingTasks.taskList;
}
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}


reinitializeAllClickedVariables(): void {
  this.addANewPendingTaskIsClicked = false;
}
initNewPendingTask(): void {
  this.newPendingTask = {"taskName": "Temp", "taskDescription": "Temp", "dueDate":"53", "taskStatus": false};
}
viewPendingTasksOfInsured(insuredName: string): void {
  this.reinitializeAllClickedVariables();
  this.currentInsuredName = insuredName;
  this.viewPendingTasksOfInsuredIsClicked = true;
}
addANewPendingTask(): void {
  this.initNewPendingTask();
  this.addANewPendingTaskIsClicked = true;
}
saveNewPendingTask(pendingTasks: PendingTasks): void {
  this.newPendingTask.taskStatus = false;
  this.newPendingTask.taskName = this.newPendingTaskName;
  this.newPendingTask.taskDescription= this.newPendingTaskDescription;
  this.newPendingTask.dueDate= this.newPendingTaskDueDate;

  this.fetchPendingTasksService
    .addANewPendingTask(pendingTasks.pendingTasksId, this.newPendingTask)
    .subscribe();
}
modifyStatusOfTask(taskStatus: boolean, taskName: string, pendingTasksId: number): void{
  this.fetchPendingTasksService.modifyStatusOfTask(!taskStatus, pendingTasksId, taskName).subscribe();
}
getPendingTasksById(portingRequestId: number): void {
}
}
