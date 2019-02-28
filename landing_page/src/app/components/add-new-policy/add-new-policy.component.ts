import { InsurerPolicyService } from './../../service/insurer-policy.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
 selector: 'app-add-new-policy',
 templateUrl: './add-new-policy.component.html',
 styleUrls: ['./add-new-policy.component.css']
})
export class AddNewPolicyComponent implements OnInit {

 firstForm;
secondForm;
thirdForm;

 constructor(private formBuilder:FormBuilder,private router:Router,private service:InsurerPolicyService) {

 }

 ngOnInit() {
this.firstForm = this.formBuilder.group({
 insurerName: ["", Validators.required],
 policyName: ["", Validators.required],
 policyId: ["", Validators.required]

}
);
this.secondForm = this.formBuilder.group({
 minSumInsured: ["", Validators.required],
 maxSumInsured: ["", Validators.required],
 hospitals: ["", Validators.required]

}
);
this.thirdForm = this.formBuilder.group({
 minAge: ["", Validators.required],
 maxAge: ["", Validators.required],
 waitingPeriod: ["", Validators.required]

}
);
 }

onSubmit() {
 console.log("hi");
const result = Object.assign(this.firstForm.value,this.secondForm.value,this.thirdForm.value);

console.log('registerForm.value : ',result);
    this.service.addNewPolicy(result).subscribe(
      data => {
        console.log('data is ', data);
        // this.router.navigate(["/login"]);
      },
      error => {
        console.log('we are getting some errors');

      }
    );
}
}