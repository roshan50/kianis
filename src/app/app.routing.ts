import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminResetPasswordComponent } from './admin-reset-password/reset-password.component';

import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin.auth.guard';

const appRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard], children: [
            {path: '', component: DashboardComponent , outlet: 'aux'},
    ]},

    { path: 'profile', component: HomeComponent, canActivate: [AuthGuard], children: [
            {path: '', component: ProfileComponent , outlet: 'aux'},
    ]},

    { path: 'user/:id', component: HomeComponent, canActivate: [AuthGuard], children: [
            {path: '', component: UserComponent , outlet: 'aux'},
    ]},

    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent},
    { path: 'reset-password', component: ResetPasswordComponent},
    { path: 'reset-password/:token', component: ResetPasswordComponent},


//........................................................................................................
    { path: 'administrator', children: [
          { path: '', component: AdminLoginComponent },
          { path: 'login', component: AdminLoginComponent},
          { path: 'reset-password', component: AdminResetPasswordComponent},
          { path: 'reset-password/:token', component: AdminResetPasswordComponent},
    ]},

    // { path: 'administrator', component: AdminHomeComponent, canActivate: [AdminAuthGuard], children: [
    //         {path: 'dashboard', component: AdminDashboardComponent , outlet: 'aux'},
    //         {path: 'profile', component: AdminProfileComponent , outlet: 'aux'},
    // ]},
  {path: 'administrator/dashboard', component: AdminDashboardComponent , canActivate: [AdminAuthGuard]},
    //.......................................
    { path: '**', redirectTo: '' },// otherwise redirect to home
];

export const routing = RouterModule.forRoot(appRoutes);
