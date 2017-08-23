import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  // loading = false;
  // missmatch = false;
  returnUrl: string;

  constructor(
      // private route: ActivatedRoute,
      // private router: Router,
      // private authenticationService: AuthenticationService,
   ) { }

  ngOnInit() {
      // reset login status
      // this.authenticationService.logout();
      //
      // // get return url from route parameters or default to '/'
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';//dashboard
  }

  login() { console.log('hiii');
      // this.loading = true;
      // this.authenticationService.login(this.model.username, this.model.password)
      //     .subscribe(
      //         data => {
      //          //  console.log(data);
      //          var user = JSON.parse(localStorage.getItem('currentUser'));
      //          //  console.log(JSON.parse(localStorage.getItem('currentUser')));
      //          if(user){
      //            this.router.navigate([this.returnUrl]);
      //            this.loading = true;
      //            this.missmatch = false;
      //            // this.globalEventsManger.showNavBar(true);
      //          }
      //          else {
      //              this.router.navigate(['login']);
      //              this.loading = false;
      //              this.missmatch = true;
      //            }
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }

}
