import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-user',
  templateUrl: './guest-user.component.html',
  styleUrls: ['./guest-user.component.css']
})
export class GuestUserComponent implements OnInit {
  guestUser: FormGroup;
  insurername: any;
  policyname: any;
  public object = {
    insurername: this.insurername,
    policyname: this.policyname
  }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }
 
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
  submitForm(){
    const signUpForm = Object.assign(this.guestUser.value, this.object);
    console.log("sign "+ signUpForm);

  }
}
