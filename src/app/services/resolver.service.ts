import { Injectable, NgZone } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../models/User";
import { UserService } from "./user.service";
import { ControlRoomService } from "./control-room.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ResolverService implements Resolve<User> {
  user = {} as User;

  constructor(
    private userService: UserService,
    private CRService: ControlRoomService,
    private router: Router,
    private zone: NgZone
  ) {}

  resolve(route: ActivatedRouteSnapshot): User | any | boolean {
    this.userService.getUser().subscribe((res: User) => {
      this.user = res;
      if (Object.values(this.user).length !== 0) {
        this.CRService.verifyToken(this.user).subscribe(obj => {
          console.log("resolver", obj);
          if (obj["valid"] === false) {
            this.zone.run(() => {
              this.router.navigate(["/login"]);
            });
          }
        });
        return this.user;
      } else {
        this.zone.run(() => {
          this.router.navigate(["/login"]);
        });
        return false;
      }
    });
  }
}
