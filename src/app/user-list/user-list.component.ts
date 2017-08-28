import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {UserService} from '../services/user.service'
import {USER} from '../user'

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users;
  title  = 'کاربران:';
  selectedUser: USER;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .then(users => this.users = users);
  }

  gotoDetail(user: USER): void {
    this.selectedUser = user;
    this.router.navigate(['/user',this.selectedUser.id]);
  }

  delete(user: USER): void {
    this.userService
        .delete(user.id)
        .then(() => {
          this.users = this.users.filter(u => u !== user);
          if (this.selectedUser === user) { this.selectedUser = null; }
        });
  }


}
