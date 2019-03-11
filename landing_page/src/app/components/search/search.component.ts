import { SearchService } from './../../service/search.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  message: any;
  policies: any;
  policyName: string;
  diseasesCovered: any;
  premium: any;
  username: any;
  agegroup: any;
  flag = 0;
  result;
  info: any;
  emailId: any;
  // public policy = {
  //   policyName : this.policyName,
  //   diseasesCovered: this.diseasesCovered,
  //   premium: this.premium,
  //   agegroup: this.agegroup
  // };
  constructor(private route: ActivatedRoute, private searchService: SearchService, private token: TokenStorageService) { }
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.username = window.localStorage.getItem("username");
    this.emailId = window.localStorage.getItem("emailId");
    console.log("in search");
    this.message = this.route.snapshot.paramMap.get('value');
    console.log( "abd" + this.message);
    this.policies = this.searchService.getSearch(this.message).subscribe(data=>this.policies = data);
    console.log("fcgvhbj" + this.policies.policyId);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    window.location.reload();
  }

}
