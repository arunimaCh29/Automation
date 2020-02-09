import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { User } from "./models/User";
import { ControlRoomService } from "./services/control-room.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
  title = "ChromeExtension";


}
