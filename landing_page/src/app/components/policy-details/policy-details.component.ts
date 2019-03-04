import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
  insurerName: any;
  policyName: any;
  policyDetails: any;
  constructor(public route: ActivatedRoute, private router: Router, private policyService: PolicyService ) { }

  ngOnInit() {
    this.insurerName = this.route.snapshot.paramMap.get('insurername');
    this.policyName = this.route.snapshot.paramMap.get('policyname');
    console.log("insurername"+ this.insurerName);
    console.log("policyname"+this.policyName);
  //  this.policyDetails= this.policyService.getPolicyDetails(this.insurerName, this.policyName).subscribe(data => {
  //    console.log(this.policyDetails);
  //     this.policyDetails = data;
  //     console.log("inside subscribe");
  //   });

  this.policyDetails= this.policyService.getPolicyDetails(this.insurerName,this.policyName).subscribe(
  
    data => {
      this.policyDetails = data;
      console.log(this.policyDetails);
  },
    error => {
      console.log('some error occured');
      console.log(error.errorMessage);
  
    }
  );
  }
}