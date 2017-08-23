import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { USER } from '../user';

@Injectable()
export class UserService{//extends BehaviorSubject<GridDataResult>
    private headers = new Headers({'Content-Type': 'application/json'});
    // private usersUrl = 'http://localhost:8080/users';  // URL to web api
    private usersUrl = 'http://localhost:7002/api/users';
    constructor(private http: Http) {
      // super(null);
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

    // getUsers(): Observable<USER[]> {
    //   return this.http.get(this.usersUrl)
    //              .map((res:Response) => res.json().Users);
    //             //  .catch(this.handleError);
    // }

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
                 .get(url)//`api/users/?username=${term}`
                 .map(response => response.json().Users);
    }


    // getAll() {
    //     return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    // }
    //
    // getById(id: number) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // create(user: USER) {
    //     return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    // }

    // update(user: USER) {
    //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }
    //
    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    //
    // // private helper methods
    //
    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
}
