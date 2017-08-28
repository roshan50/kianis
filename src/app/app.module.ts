import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AuthGuard } from './auth.guard';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserListComponent,
    HomeComponent,
    UserComponent,
    ProfileComponent,
    UserSearchComponent,
    MainMenuComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
  ],
  providers: [
    AuthGuard,
    UserService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
