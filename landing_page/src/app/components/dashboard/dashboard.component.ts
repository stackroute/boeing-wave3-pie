import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 username: any;
 
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    let as = window.localStorage.setItem("insuredname",this.username);
    this.router.navigate(['/recommendations',this.username]);
  }
 
}
