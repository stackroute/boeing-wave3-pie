import { UserDashboardService } from 'src/app/service/user-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.css']
})
export class MyPoliciesComponent implements OnInit {

public policies;
username: any;
constructor(public _route: ActivatedRoute, private router: Router, public userService: UserDashboardService) { }
ngOnInit() {
this.username = this._route.snapshot.paramMap.get('username');
this.policies = this.userService.getPolicies(this.username).subscribe(
  data => {

    this.policies = data;
    console.log(this.policies);
},
  error => {
    console.log('some error occured');
    console.log(error.errorMessage);
  }
);
}

}
