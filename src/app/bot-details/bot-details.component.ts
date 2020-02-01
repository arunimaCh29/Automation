import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange  } from '@angular/core';
import { BotConfiguration } from '../models/botConfiguration';
import { Field } from '../models/field';
import { ControlRoomService } from '../services/control-room.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.css']
})
export class BotDetailsComponent implements OnInit, OnChanges {

  @Input()
  Bot: BotConfiguration;
  fields: Field[];
  user: User;
  deploymsg: string;
  runners: [];
  fileID;
  runnerId;
  constructor(private controlRService: ControlRoomService, private userService: UserService) { }

  ngOnInit() {
    this.fields = this.Bot.fields;

  }


  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes.Bot ;
    this.Bot = change.currentValue;
    this.fields = this.Bot.fields;
    this.runnerId = null;
    this.user = this.userService.getUser();
    this.controlRService.verifyToken(this.user).subscribe( res => {

      if (res.valid) {
      } else {
        this.controlRService.authentication(this.user.crUrl, this.user.username, this.user.password).subscribe( res => {
          this.user.token = res.token;
        });
      }

      this.controlRService.getDeviceList(this.user).subscribe(res => {
        this.runners = res.list;
      });

    });
  }

  onDeploy() {

    const botVariables: { [k: string]: any} = {};
    const insideValue: { [k: string]: any} = {};
    // tslint:disable-next-line: forin
    for (const i in this.fields) {
      if (this.fields[i].variableType === 'string') {
          insideValue[this.fields[i].variableType] =this.fields[i].value;

          botVariables[this.fields[i].variable]= insideValue;
        }

      this.controlRService.verifyToken(this.user).subscribe( res => {

      if (!res.valid) {
        this.controlRService.authentication(this.user.crUrl, this.user.username, this.user.password).subscribe( res => {
          // tslint:disable-next-line: quotemark
          this.user.token = res.token;
        });
      }

      this.controlRService.getFileID(this.user, this.Bot.path).subscribe(res => {
        this.fileID = res.list[0].id;
        this.controlRService.deploymentWithVariables(botVariables, this.fileID, this.runnerId, this.Bot.fields, this.user).subscribe(res => {
          this.deploymsg = 'Bot Successfully deployed';
        },
        err => {
          this.deploymsg = 'Bot deployment Unsuccesful';
        });
      });
      },
      err => {
        this.deploymsg = 'File does not exist';
      });


  }
  }
}
