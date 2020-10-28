import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CanActivateViaAuthGuard, HttpAuthService, HttpAuthModule } from "http-auth-israel";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpAuthModule,
    FormsModule
  ],
  providers: [HttpAuthService, CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
