import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { config } from '../config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(config.apiUrl+'login',{ username: username, password: password } )//JSON.stringify({ username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res);
                if (res.code == 200) {
                  var user = res.User;

                  var token = this.returnHash();
                  user.authKey = token;

                  localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return res;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    returnHash(){
      const abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
      var token="";
      for(var i=0;i<100;i++){
           token += abc[Math.floor(Math.random()*abc.length)];
      }
      return token; //Will return a 32 bit "hash"
    }
}
