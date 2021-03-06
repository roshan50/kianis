import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  missmatch = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
   ) {   }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';//dashboard
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                // console.log(data);
               var user = JSON.parse(localStorage.getItem('currentUser'));
               console.log(user);
               if(user){ console.log(this.returnUrl)
                 this.router.navigate([this.returnUrl]);
                 this.loading = false;
                 this.missmatch = false;
                 // this.globalEventsManger.showNavBar(true);
               }
               else {
                   this.router.navigate(['login']);
                   this.loading = false;
                   this.missmatch = true;
                 }
              },
              error => {
                  // this.alertService.error(error);
                  // this.loading = false;
              });
  }

}
