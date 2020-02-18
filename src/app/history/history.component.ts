import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserHistoryService } from '../services/user-history.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { BotRunHistory } from '../models/botRunHistory';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private loadedUser = {} as User;
  private loadedHistory = [] as BotRunHistory[];
  constructor(private userHistory: UserHistoryService, private userService: UserService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {

    this.userService.userSubscribe().subscribe(res=> {
      this.loadedUser = res;
    });
    this.userHistory.subscribeUserHistory().subscribe(res=> {
      this.loadedHistory = res;
      console.log("varSubscribe;", this.loadedHistory)
      this.changeDetection.detectChanges();
    })

    this.userHistory.getUserHistory(this.loadedUser.username).subscribe(res=> {
      this.loadedHistory = res;
      console.log("getfunction;", this.loadedHistory)
      this.changeDetection.detectChanges();
    })



  }

}
