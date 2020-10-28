import { Component, OnInit } from '@angular/core';
import { HttpAuthService, variabls } from 'http-auth-israel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private httpAuthService: HttpAuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    variabls.url = `${environment.urlApi}/auth/logout`;
    this.httpAuthService.logout();
  }

}
