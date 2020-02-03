import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ControlRoomService } from "../services/control-room.service";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { LoadersService } from '../services/loaders.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  nextPage: boolean;
  loginForm: FormGroup;
  submitted: boolean;
  errormsg: string;
  user= {} as User;
  crUrls: [];
  constructor(
    private route: ActivatedRoute,
    private CRService: ControlRoomService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loaderService: LoadersService
  ) {}

  ngOnInit() {
    this.nextPage = false;
    this.submitted = false;
    this.errormsg = "";
    this.loginForm = this.formBuilder.group({
      url: [null, [Validators.required]],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.loaderService.getConfigFile().subscribe(res=> {
      this.crUrls = res["CRUrls"];
    })
  }

  get f() {
    return this.loginForm.controls;
  }
  authenticate() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.CRService.authentication(
      this.f.url.value,
      this.f.username.value,
      this.f.password.value
    ).subscribe(
      res => {
        console.log(res);
        this.user.password = this.f.password.value;
        this.user.username =  this.f.username.value;
        this.user.token = res["token"];
        this.user.userId = res["user.id"];
        this.user.crUrl= this.f.url.value;
        this.userService.setUser(this.user);
        this.nextPage = true;
        this.errormsg="";
      },
      err => {
        this.errormsg = " Cannot Login! Check Credentials again";
      }
    );
  }
}
