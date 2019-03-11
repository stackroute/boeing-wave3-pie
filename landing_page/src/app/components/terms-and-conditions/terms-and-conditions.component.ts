import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  username;
  policyname;
  insurername;
  constructor() { }

  ngOnInit() {
    this.username = window.localStorage.getItem("username");
    this.policyname = window.localStorage.getItem("policyname");
    this.insurername = window.localStorage.getItem("insurername");
  }

}
