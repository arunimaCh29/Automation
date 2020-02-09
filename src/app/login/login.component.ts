import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  SimpleChange,
  SimpleChanges,
  OnChanges,
  NgZone
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ControlRoomService } from "../services/control-room.service";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/User";
import { UserService } from "../services/user.service";
import { LoadersService } from "../services/loaders.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  nextPage: boolean;
  user= {} as User;
  next: boolean;
  loginForm: FormGroup;
  submitted: boolean;
  errormsg: string;

  crUrls: [];
  constructor(
    private route: Router,
    private CRService: ControlRoomService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loaderService: LoadersService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    //this.nextPage = false;
    this.submitted = false;
    this.errormsg = "";
    this.loginForm = this.formBuilder.group({
      url: [null, [Validators.required]],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.loaderService.getConfigFile().subscribe(res => {
      this.crUrls = res["CRUrls"];
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
        this.user.password = this.f.password.value;
        this.user.username = this.f.username.value;
        this.user.token = res["token"];
        this.user.firstName = res["user"]["firstName"];
        this.user.lastName = res["user"]["lastName"];
        this.user.email = res["user"]["email"];
        this.user.userId = res["user.id"];
        this.user.crUrl = this.f.url.value;
        this.userService.setUser(this.user);
        this.nextPage = true;
        this.errormsg = "";
        this.zone.run(() => {
          this.route.navigate(['/bot-pop-up']);
        })
      },
      err => {
        this.errormsg = " Cannot Login! Check Credentials again";
      }
    );
  }
}
