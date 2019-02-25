import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../auth/token-storage.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  username: any;
  info: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("username");
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
