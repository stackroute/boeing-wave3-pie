import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestService } from './../../service/request.service';
import { Router } from '@angular/router';
import { PolicyService } from './../../service/policy.service';
import { UserService } from './../../service/user.service';
import { UserDashboardService } from './../../service/user-dashboard.service';

@Component({
  selector: 'app-porting-request',
  templateUrl: './porting-request.component.html',
  styleUrls: ['./porting-request.component.css']
})
export class PortingRequestComponent implements OnInit {

  loggedIn: any;
  anusha: any;
  policy1: any;
  insuredName: any;
  insurerProd: any=null;
  insurerName: any;
  existingMaxSumInsured: any;
  addon: any=null;
  existingPolicyId: any;
  newInsurerProd: any = null;
  newInsurerName: any;
  newMaxSumInsured: any;
  reason: any=null;
  familyMem: any=null;
  exclusion: any=null;
  policies: any ;
  flag=false;
  flag1=false;
  newpolicies: any;
  portingForm = {
    insuredName: this.insuredName,
    insurerProduct: this.insurerProd,
    insurerName: this.insurerName,
    sumInsured: this.existingMaxSumInsured,
    addOns: this.addon,
    policyNumber: this.existingPolicyId,
    newInsurerProduct: this.newInsurerProd,
    newInsurerName: this.newInsurerName,
    newSumInsured: this.newMaxSumInsured,
    reasonForPortability: this.reason,
    familyMembers: this.familyMem,
    exclusionPeriod: this.exclusion
  }
  // policies=[
  //   {value: 'cancer', viewValue: 'CancerPolicy1'},
  //   {value: 'AIDS', viewValue: 'AIDSPolicy'}
  // ];
  constructor(private formBuilder: FormBuilder, private requestService: RequestService,private router: Router, private policyService: PolicyService, private userService: UserDashboardService) { }
 
  ngOnInit() {
     this.insuredName = window.localStorage.getItem("insuredname"); 
    //  console.log("inside ngOninit");
    this.policies = this.userService.getPolicies(this.insuredName).subscribe(data =>
      {
        console.log("inside subscribe", this.insuredName);
        this.policies = data ;
        console.log("data in oninit "+ data);
        
      });
      this.newpolicies = this.policyService.getAllPolicies().subscribe(data =>
        {
          console.log("inside company policies");
          this.newpolicies = data;
          console.log(data);
        })

  }
  
  submitForm(insuredName,insurerProduct,insurerName,existingMaxSumInsured,addOns,existingPolicyId,newInsurerProduct,newInsurerName,newMaxSumInsured,reasonForPortability,familyMembers,exclusionPeriod) {
    console.log("hi");
    console.log(newInsurerProduct + " "+reasonForPortability+" "+familyMembers+" "+exclusionPeriod);
    this.portingForm.insuredName = insuredName;
    this.portingForm.insurerProduct = insurerProduct;
    this.portingForm.insurerName = insurerName;
    this.portingForm.sumInsured = existingMaxSumInsured;
    this.portingForm.addOns = addOns;
    this.portingForm.policyNumber = existingPolicyId;
    this.portingForm.newInsurerProduct = newInsurerProduct;
    this.portingForm.newInsurerName = newInsurerName;
    this.portingForm.newSumInsured = newMaxSumInsured;
    this.portingForm.reasonForPortability = reasonForPortability;
    this.portingForm.familyMembers = familyMembers;
    this.portingForm.exclusionPeriod = exclusionPeriod;

    console.log( "porting form  " + this.portingForm);
    const res = Object.assign(this.portingForm);
    console.log("hiii" + res);
    this.requestService.postRequest(res).subscribe(
      data => {
        console.log('hel');
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/dashboard',name]);
  }
  logged(){
    this.loggedIn=true;
  }
reach(insurerProduct)
{
  console.log("abcd "+ insurerProduct);

  this.policyService.getPolicyByPolicyName(insurerProduct).subscribe(
    data=> {
      this.anusha = data;
      this.flag = true;
      console.log(data);
    }
  );
}
reach1(newInsurerProduct)
{
  console.log("abcd", newInsurerProduct);
  this.policyService.getPolicyByPolicyName(newInsurerProduct).subscribe(
    data=> {
      this.policy1 = data;
      this.flag1 = true;
      console.log(data);
    }
  );
}
}