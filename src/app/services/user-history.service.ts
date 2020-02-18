import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { BotRunHistory } from '../models/botRunHistory';
/// <reference path="node_modules\@types\chrome\index.d.ts"/>
const CHROME = chrome;

@Injectable()
export class UserHistoryService {

  private userHistory :BehaviorSubject<BotRunHistory[]> = new BehaviorSubject<BotRunHistory[]>([] as BotRunHistory[]);
    constructor() {


    }


  setUserHistory(newUserHistory: BotRunHistory, user: string ) {
    const obj = {};
    let tempUserHistory =[] as BotRunHistory[];
    this.getUserHistory(user).subscribe((res: BotRunHistory[]) => {
     if (res.length === 0) {
      tempUserHistory.push(newUserHistory);
       this.userHistory.next(tempUserHistory);
       obj[user] = tempUserHistory;
       CHROME.storage.local.set(obj, function() {});
     } else if( res.length === 10) {
      tempUserHistory = res;
       tempUserHistory.shift();
       tempUserHistory.push(newUserHistory);
       obj[user] = tempUserHistory;
       this.userHistory.next(tempUserHistory);
       CHROME.storage.local.set(obj, function() {});
     } else {
      tempUserHistory = res;
      tempUserHistory.push(newUserHistory);
      obj[user] = tempUserHistory;
      this.userHistory.next(tempUserHistory);
      CHROME.storage.local.set(obj, function() {});
     }
   });
  }

  getUserHistory(user: string): Observable<BotRunHistory[]> {
    return new Observable<BotRunHistory[]>(observe => {

      CHROME.storage.local.get(user, function(result) {
        let botHistory =[] as BotRunHistory[];
        console.log('get userHistory:', result);
        if (result[user]) {
         botHistory = result[user];
         console.log(botHistory);
        }
        observe.next(botHistory);
        // observe.complete();
      });
    });
  }

  subscribeUserHistory() {
    return this.userHistory;
  }
}
