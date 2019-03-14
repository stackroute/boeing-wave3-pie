import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { PendingTasks } from '../pending-tasks';
import { Task } from '../task';
import { FetchPendingTasksService } from '../../service/fetch-pending-tasks.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Email } from '../../service/email';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-display-all-porting-requests',
  templateUrl: './display-all-porting-requests.component.html',
  styleUrls: ['./display-all-porting-requests.component.css']
})
export class DisplayAllPortingRequestsComponent implements OnInit {

  dataIsLoaded = false;
  pendingTasks = { "pendingTasksId": 0, "taskList": [], "newInsurerName": "temp", "insurerName": "temp", "insuredName": "temp" };
  @Input() currentCompanyName: string;
  @Input() currentInsuredName: string;
  @Input() portingRequestId: number;
  @Output() showAcceptRequestButton = new EventEmitter();
  newPendingTasks: PendingTasks;
  viewPendingTasksOfInsuredClicked: boolean;
  newPendingTask: Task;
  newPendingTaskName: string;
  newPendingTaskDescription: string;
  newPendingTaskDueDate: string;

  displayedColumns: string[] = ['taskName', 'taskDescription', 'taskStatus', 'dueDate', 'modifyStatusButton'];

  dataSource: Task[];
  // currentInsuredName: string;
  fetchAllPortingRequestsIsClicked: Boolean;
  addANewPendingTaskIsClicked: Boolean;
  viewPendingTasksOfInsuredIsClicked: Boolean;
  email = { "to": "apataskar780@gmail.com", "subject": "temp", "body": "temp" };
  userName: string;


  toText = "achintya882@gmail.com";
  subjectReminderText = "REMINDER: Pleas complete the following tasks to further your porting request."
  introReminderText = "Dear ";
  bodyReminderText = "Please complete the following tasks by the given deadlines: \n";
  salutationtText = "-The PIE team";
  introMarkAsComplete = "Dear ";
  subjectMarkAsComplete = "Task completion notification"
  bodyMarkAsComplete = "This is to notify you that the following task has been completed: \n";
  subjectAddedNewTask = "Please complete the following task to further your porting request";
  bodyAddedNewTask = "Dear ";



  constructor(private fetchPendingTasksService: FetchPendingTasksService, @Inject(MAT_DIALOG_DATA) private data: any, private emailService: EmailService) {
    this.fetchPendingTasksService = fetchPendingTasksService;
    this.portingRequestId = data.portingRequestId;
    this.userName = data.userName;
  }

  ngOnInit() {
    this.dataIsLoaded = false;
    this.viewPendingTasksOfInsuredClicked = false;
    this.fetchPendingTasksService.getPendingTasksById(this.portingRequestId).subscribe(pendingTasks => {
      this.pendingTasks = pendingTasks[0];
      this.dataSource = this.pendingTasks.taskList;
      if(this.dataSource.length != 0)
        this.dataIsLoaded = true;
    })
  }


  reinitializeAllClickedVariables(): void {
    this.addANewPendingTaskIsClicked = false;
  }
  initNewPendingTask(): void {
    this.newPendingTask = { "taskName": "Temp", "taskDescription": "Temp", "dueDate": "53", "taskStatus": false };
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
  saveNewPendingTask(): void {
    this.newPendingTask.taskStatus = false;
    this.newPendingTask.taskName = this.newPendingTaskName;
    this.newPendingTask.taskDescription = this.newPendingTaskDescription;
    this.newPendingTask.dueDate = this.newPendingTaskDueDate;

    this.fetchPendingTasksService
      .addANewPendingTask(this.pendingTasks.pendingTasksId, this.newPendingTask)
      .subscribe(data => {
        this.dataIsLoaded = true;
        this.fetchPendingTasksService.getPendingTasksById(this.portingRequestId).subscribe(pendingTasks => {
          this.pendingTasks = pendingTasks[0];
          this.dataSource = this.pendingTasks.taskList;
          this.dataIsLoaded = true;
        })
        this.addANewPendingTaskIsClicked = false;
        this.email.subject = this.subjectAddedNewTask;
        this.email.body = this.bodyAddedNewTask + this.userName + ",\n" +
          "Please complete the following task:\n\t" +
          this.newPendingTask.taskName + "\n\t" +
          this.newPendingTask.taskDescription + "\n\t" +
          this.newPendingTask.dueDate + "\n\n" +
          this.salutationtText;

        this.emailService.getEmailId(this.userName).subscribe(data => {
          this.email.to = data;
          this.emailService.sendEmail(this.email).subscribe();
        });
      }
      );
  }
  modifyStatusOfTask(taskStatus: boolean, taskName: string): void {
    this.fetchPendingTasksService.modifyStatusOfTask(!taskStatus, this.pendingTasks.pendingTasksId, taskName).subscribe(data => {

      this.dataIsLoaded = true;
      this.fetchPendingTasksService.getPendingTasksById(this.portingRequestId).subscribe(pendingTasks => {
        this.pendingTasks = pendingTasks[0];
        this.dataSource = this.pendingTasks.taskList;
        this.dataIsLoaded = true;

        this.email.subject = this.subjectMarkAsComplete;
        this.email.body = this.bodyMarkAsComplete + "\t" + taskName + "\n\n" + this.salutationtText;
        this.emailService.getEmailId(this.userName).subscribe(data => {
          this.email.to = data;
          this.emailService.sendEmail(this.email).subscribe();
        });
      })
    }
    );
  }
  getPendingTasksById(portingRequestId: number): void {
  }
  sendAReminder(): void {
    this.email.to = this.toText;
    this.email.subject = this.subjectReminderText;
    this.email.body = this.introReminderText + this.userName + ",\n" + this.bodyReminderText;
    for (let task of this.pendingTasks.taskList) {
      if (task.status == true)
        continue;
      this.bodyReminderText = this.bodyReminderText + "\n\tTask: " + task.taskName + "\n\tTask Description: " + task.taskDescription + "\n\tDue Date: " + task.dueDate
    }
    this.bodyReminderText = this.bodyReminderText + "\n" + this.salutationtText;
    this.email.body = this.bodyReminderText;
    this.emailService.getEmailId(this.userName).subscribe(data => {

      this.email.to = data;

      this.emailService.sendEmail(this.email).subscribe();
    });
  }


  clearForPorting(): void {
    this.showAcceptRequestButton.emit(this.portingRequestId);
  }
}
