import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class UserService {

  private user: User;
  constructor() { }

  setUser(newUser:User) {
    this.user = newUser;
  }

  getUser(){
    return this.user;
  }
}
