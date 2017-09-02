import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class AdminResetPasswordComponent implements OnInit {
  model: any = {};
  loading = false;
  missmatch = false;
  token;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { console.log('admin reset')}

  ngOnInit() {
    this.route.params.subscribe(params => {
         this.token = +params['token'];
         console.log(this.token);
      });
  }

  update(){
    console.log('update password');
    this.router.navigate(['login']);
  }

  send_email(){
    console.log('email sent!');
    this.token = this.returnHash(17);
    //save token to db where email
    // set 24 hour expired time
    this.router.navigate(['/admin-reset-password',this.token]);
  }

  returnHash(number){
    const abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    var token="";
    for(var i=0;i<number;i++){
         token += abc[Math.floor(Math.random()*abc.length)];
    }
    return token; //Will return a 32 bit "hash"
  }

}
