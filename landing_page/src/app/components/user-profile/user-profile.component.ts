import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from './../../service/user-dashboard.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public username;
  public profile:any;
  profileForm: any;
  
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private userService: UserDashboardService) { }
 
 ngOnInit() {
 this.profileForm=this.formBuilder.group({

 })
  this.username = this.route.snapshot.paramMap.get('username');
   console.log('ts' + this.username);
   this.userService.getProfile(this.username).subscribe(
    data => {
      this.profile = data;
      console.log(data);
      console.log(this.profile);
  },
    error => {
      console.log('some error occured');
      console.log(error.errorMessage);
  
    }
  );
 }
}
