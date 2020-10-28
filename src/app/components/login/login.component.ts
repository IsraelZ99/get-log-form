import { Component, OnInit } from '@angular/core';
import { } from "@angular/forms";
import { HttpAuthService, variabls } from "http-auth-israel";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpAuthService: HttpAuthService) { }

  ngOnInit(): void {
  }

  onLogin(form): void {
    variabls.url = `${environment.urlApi}/auth/token`;
    this.httpAuthService.setUrlLogin('logout');
    this.httpAuthService.login(form.value).subscribe(data => { });
  }

}
