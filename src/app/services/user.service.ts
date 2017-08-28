import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { USER } from '../user';
import { config } from '../config';

@Injectable()
export class UserService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private usersUrl = config.apiUrl+'users';
    constructor(private http: Http) {
    }

    getUsers(): Promise<USER[]> {
      return this.http.get(this.usersUrl)
                 .toPromise()
                 .then(response => response.json().Users)
                 .catch(this.handleError);
    }

    getUser(id: number): Promise<USER[]> {
      const url = `${this.usersUrl}/${id}`;
      console.log(url);
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().User)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    create(user: USER): Promise<USER> {
      console.log(user);
      return this.http
        .post(this.usersUrl, {user: user}, {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }

    update(user: USER): Promise<USER[]> {
      console.log(user);
      const url = `${this.usersUrl}`;console.log(url);
      return this.http
        .put(url, {user: user}, {headers: this.headers})
        .toPromise()
        .then(() => user)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    search(term: string): Observable<USER[]> {
      const url = `${this.usersUrl}/search/${term}`;
      console.log(url);
      return this.http
                 .get(url)
                 .map(response => response.json().Users);
    }

}
