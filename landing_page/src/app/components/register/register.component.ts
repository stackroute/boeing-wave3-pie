import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // title = 'Please tell us about yourself.';

  form: any = {};
 signupInfo: SignUpInfo;
 isSignedUp = false;
 isSignUpFailed = false;
 errorMessage = '';
 selectedValue: string;
 selectedCar: string;
 firstForm: FormGroup;
 secondForm: FormGroup;

 foods: Food[] = [
   {value: 'steak-0', viewValue: 'whats your nickname?'},
   {value: 'pizza-1', viewValue: 'favorite cricketer?'},
   {value: 'tacos-2', viewValue: 'Tacos'}
 ];

 cars: Car[] = [
   {value: 'volvo', viewValue: ' whats your nickname?'},
   {value: 'saab', viewValue: 'favorite cricketer?'},
   {value: 'mercedes', viewValue: 'Mercedes'}
 ];

 constructor(private authService: AuthService, private router: Router,private formBuilder: FormBuilder) { }


 ngOnInit() {
   console.log("abcd");
   this.firstForm = this.formBuilder.group({
     username: ['', Validators.required],
     email: ['', Validators.required],
     password: ['', [Validators.required, Validators.minLength(6)]],

   });
   this.secondForm = this.formBuilder.group({
     gender: ['', Validators.required],
     fullName: ['', Validators.required],
     insuredId: ['',Validators.required],
     securityAnswer: ['', Validators.required]});

  }

  submitForm() {
   console.log("hi");

   const signUpForm = Object.assign(this.firstForm.value, this.secondForm.value);
     console.log('registerForm.value : ', signUpForm);

   this.authService.signUp(signUpForm).subscribe(
     data => {
       console.log(data);
     },
     error => {
       console.log(error);
     }
   );
   this.router.navigate(['/login']);
 }
}

