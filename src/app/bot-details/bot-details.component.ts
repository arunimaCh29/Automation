import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { BotConfiguration } from "../models/botConfiguration";
import { Field } from "../models/field";
import { ControlRoomService } from "../services/control-room.service";
import { User } from "../models/User";
import { UserService } from "../services/user.service";
import { Observable, timer } from "rxjs";

@Component({
  selector: "app-bot-details",
  templateUrl: "./bot-details.component.html",
  styleUrls: ["./bot-details.component.css"]
})
export class BotDetailsComponent implements OnInit, OnChanges {
  @Input()
  Bot: BotConfiguration;
  fields: Field[];
  user: User;
  deploymsg: string;
  error: boolean;
  show: boolean;
  runners: [];
  fileID;
  runnerId;
  constructor(
    private controlRService: ControlRoomService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fields = this.Bot.fields;
  }

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes.Bot;
    this.Bot = change.currentValue;
    this.fields = this.Bot.fields;
    this.runnerId = null;
    this.userService.getUser().subscribe(res3 => {
      this.user = res3;
      this.controlRService.verifyToken(this.user).subscribe(res => {
        if (res.valid) {
        } else {
          this.controlRService
            .authentication(
              this.user.crUrl,
              this.user.username,
              this.user.password
            )
            .subscribe(res1 => {
              this.user.token = res1.token;
            });
        }

        this.controlRService.getDeviceList(this.user).subscribe(res2 => {
          this.runners = res2.list;
        });
      });
    });
  }

  onDeploy() {
    const botVariables: { [k: string]: any } = {};

    // tslint:disable-next-line: forin
    for (const i in this.fields) {
      if (
        this.fields[i].variableType === "string" ||
        this.fields[i].variableType === "number"
      ) {
        const insideValue: { [k: string]: any } = {};
        insideValue[this.fields[i].variableType] = this.fields[i].value;

        botVariables[this.fields[i].variable] = insideValue;
      }
    }
    botVariables["vBotTaskerUser"] = {
      list: [
        this.user.email,
        this.user.firstName,
        this.user.lastName,
        this.user.username
      ]
    };
    this.controlRService.verifyToken(this.user).subscribe(
      res => {
        if (!res.valid) {
          this.controlRService
            .authentication(
              this.user.crUrl,
              this.user.username,
              this.user.password
            )
            .subscribe(res => {
              // tslint:disable-next-line: quotemark
              this.user.token = res.token;
            });
        }

        this.controlRService
          .getFileID(this.user, this.Bot.path)
          .subscribe(res => {
            if (res.list.length !== 0) {
              this.fileID = res.list[0].id;
            } else {
              this.setTime();
              this.error = true;
              this.deploymsg =
                "File does not exist Or Permission denied to the file";
                return;
            }

            this.controlRService
              .deploymentWithVariables(
                botVariables,
                this.fileID,
                this.runnerId,
                this.Bot.fields,
                this.user
              )
              .subscribe(
                res => {
                  this.setTime();
                  this.deploymsg = "Bot Successfully deployed";
                  this.error = false;
                },
                err => {
                  this.setTime();
                  this.deploymsg = "Bot deployment Unsuccesful";
                  this.error = true;
                }
              );
          });
      },
      err => {
        this.setTime();
        this.deploymsg = "File does not exist Or Permission denied to the file";
      }
    );
  }

  setTime() {
    this.show = true;
    let time: Observable<any>;
    time = timer(5000);
    time.subscribe(() => {
      this.show = false;
    });
  }
}
