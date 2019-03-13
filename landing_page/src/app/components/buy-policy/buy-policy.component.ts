import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PolicyService } from './../../service/policy.service';
import { Email } from './../../service/email';
import { EmailService } from './../../service/email.service';

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.css']
})
export class BuyPolicyComponent implements OnInit {

  insurerName: any;
  policyName: any;
  insuredName: any;
  requestId: any;
  emailId: any;
  public object = {
    insurerName: this.insurerName,
    policyName: this.policyName,
    insuredName: this.insuredName,
    emailId: this.emailId
  }
  constructor(public route: ActivatedRoute, private router: Router, private policyService: PolicyService, private emailService: EmailService) { }
  sampleEmail: Email;
  ngOnInit() {
      this.insurerName= this.route.snapshot.paramMap.get('insurername');
      this.policyName= this.route.snapshot.paramMap.get('policyname');
      this.insuredName= this.route.snapshot.paramMap.get('insuredname');
      this.emailId = this.route.snapshot.paramMap.get('emailId');
      console.log(this.insurerName +" "+this.policyName+" "+this.insuredName +" "+this.emailId.emailId);
      this.requestId = this.policyService.buyPolicy(this.object).subscribe(
        data => {
          this.requestId = data;
          console.log(this.requestId);
 
          this.sampleEmail = {"to": this.emailId, "subject": "New Policy Bought",
          "body": "Congratulations on your new  Health Insurance -"
          + this.policyName+ "from" + this.insurerName+
          ".Your RequestId is" + this.requestId +
           ".You can avail the services within 7 days."
        };
          this.emailService.sendEmail(this.sampleEmail).subscribe();
        },
        error => {
          console.log("error occured");
          console.log(error);
        }
      );
  }
 
 }