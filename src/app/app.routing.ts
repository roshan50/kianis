import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserComponent } from './user/user.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    // { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard], children: [
    //         {path: '', component: DashboardComponent , outlet: 'aux'},
    //     ]},
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterComponent },
    // { path: 'user/:id', component: UserComponent , canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }// otherwise redirect to home
];

export const routing = RouterModule.forRoot(appRoutes);
