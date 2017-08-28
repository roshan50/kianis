import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from './auth.guard';

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

    { path: '**', redirectTo: '' }// otherwise redirect to home
//........................................................................................................
    { path: 'administrator', component: AdminHomeComponent, children: [
          { path: '', component: AdminLoginComponent },
          { path: 'login', component: AdminLoginComponent},
          { path: 'reset-password', component: AdminResetPasswordComponent},
          { path: 'reset-password/:token', component: AdminResetPasswordComponent},
    ]},

    { path: 'administrator', component: AdminHomeComponent, canActivate: [AdminAuthGuard], children: [
            {path: 'dashboard', component: AdminDashboardComponent , outlet: 'aux'},
            {path: 'profile', component: AdminProfileComponent , outlet: 'aux'},
    ]},
];

export const routing = RouterModule.forRoot(appRoutes);
