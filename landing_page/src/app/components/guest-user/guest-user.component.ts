import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from './../../service/policy.service';
import { EmailService } from './../../service/email.service';

@Component({
  selector: 'app-guest-user',
  templateUrl: './guest-user.component.html',
  styleUrls: ['./guest-user.component.css']
})
export class GuestUserComponent implements OnInit {
  guestUser: FormGroup;
  insurername: any;
  policyname: any;
  requestId: any;
  sampleEmail: any;
  public object = {
    insurername: this.insurername,
    policyname: this.policyname
  }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private policyService: PolicyService, private emailService: EmailService) { }
 
  ngOnInit() {
    this.object.insurername = this.route.snapshot.paramMap.get('insurername');
    this.object.policyname = this.route.snapshot.paramMap.get('policyname');
    this.guestUser = this.formBuilder.group({
      email:['',Validators.required],
      phone:['',Validators.required]
    });
    console.log("guest user "+ this.guestUser);
    console.log("insurername "+ this.object.insurername);
  }
  submitForm(email){
    const signUpForm = Object.assign(this.guestUser.value, this.object);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    console.log("sign "+ signUpForm);
    // this.router.navigate(["/buyPolicy", signUpForm]);
    this.requestId = this.policyService.buyPolicy(signUpForm).subscribe(
      data => {
        this.requestId = data;
        console.log(this.requestId);

        this.sampleEmail = {"to": email, "subject": "New Policy Bought",
        "body": "Congratulations on your new  Health Insurance -"
        + this.object.policyname+ "from" + this.object.insurername+
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
