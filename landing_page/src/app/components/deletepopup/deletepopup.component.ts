import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css']
})
export class DeletepopupComponent implements OnInit {
insurerName:any;
policyName:any;
  constructor() { }

  ngOnInit() {
    this.insurerName = window.localStorage.getItem("insurername");
    this.policyName = window.localStorage.getItem("policyname");
  }

}
