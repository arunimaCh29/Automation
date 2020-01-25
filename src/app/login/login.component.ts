import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ControlRoomService } from "../services/control-room.service";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  constructor(
    private route: ActivatedRoute,
    private CRService: ControlRoomService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.nextPage = false;
    this.submitted = false;
    this.errormsg = "";
    this.loginForm = this.formBuilder.group({
      url: ["", [Validators.required]],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
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
        this.CRService.settoken(res["token"]);
        this.nextPage = true;
      },
      err => {
        this.errormsg = " Cannot Login! Check Credentials again";
      }
    );
  }
}
