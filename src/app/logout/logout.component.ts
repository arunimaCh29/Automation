import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user = {} as User;
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.setUser(this.user);
  }

}
