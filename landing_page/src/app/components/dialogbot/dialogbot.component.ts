import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable} from 'rxjs-compat/Observable';
import 'rxjs/add/operator/scan';
import { Message,ChatService } from '../../service/chat.service';
import { SearchService } from './../../service/search.service';

@Component({
 selector: 'app-dialogbot',
 templateUrl: './dialogbot.component.html',
 styleUrls: ['./dialogbot.component.css']
})
export class DialogbotComponent implements OnInit {

 messages: Observable<Message[]>;
 formValue: string;
 policies: any;

 constructor(public chat: ChatService, private search: SearchService) { }

 ngOnInit() {
   this.messages = this.chat.conversation.asObservable()
       .scan((acc, val) => acc.concat(val) );
 }
 sendMessage() {
   // this.policies = this.search.getSearch(this.formValue).subscribe();
   //  if()
    this.chat.converse(this.formValue);
    this.formValue = '';
    console.log(this.messages);
  }


}