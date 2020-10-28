import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpAuthenticationZnService } from "http-authentication-is";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: HttpAuthenticationZnService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    const urlAPi: string = 'http://155.138.216.49:8080/ollin-server/api/auth/logout';
    if (this.authService.logout(urlAPi)) this.router.navigateByUrl('/');
  }

}
