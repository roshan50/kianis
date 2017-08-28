import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {UserService} from '../services/user.service'
import {USER} from '../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users;
  id: number;
  constructor(private userService: UserService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    console.log('hi user');
     this.route.params.subscribe(params => {
          this.id = +params['id'];
          console.log(this.id);
        });
        this.userService.getUser(this.id)
          .then(user => this.users = user);
    }

    save(): void {
      this.userService.update(this.users[0])
        .then(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }

}
