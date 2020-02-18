import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, BehaviorSubject } from 'rxjs';
/// <reference path="node_modules\@types\chrome\index.d.ts"/>
const CHROME = chrome;

@Injectable()
export class UserService {
  private user : BehaviorSubject<User> = new BehaviorSubject({} as User);
  constructor() {}

  setUser(newUser: User) {
    let obj = {};
    obj['user'] = newUser;
    CHROME.storage.local.set(obj, function() {});
    this.user.next(newUser);
  }

  userSubscribe() {
    return this.user;
  }
  getUser(): Observable<User> {
    return new Observable<User>(observe => {
      CHROME.storage.local.get(['user'], function(result) {
        console.log('get user:', result);
        if (result.user) {
          this.user = result['user'];
        }
        observe.next(this.user);
        observe.complete();
      });
    });
  }
}
