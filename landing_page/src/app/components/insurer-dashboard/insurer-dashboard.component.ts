import { TokenStorageService } from "./../companyauth/token-storage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-insurer-dashboard",
  templateUrl: "./insurer-dashboard.component.html",
  styleUrls: ["./insurer-dashboard.component.css"]
})
export class InsurerDashboardComponent implements OnInit {
  insurerLicense: any;
  info: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService
  ) {}

  ngOnInit() {
    this.insurerLicense = this.route.snapshot.paramMap.get("insurerLicense");
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    if (!this.info.token) {
      this.router.navigateByUrl("login");
    }
  }
}
