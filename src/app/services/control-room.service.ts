import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ControlRoomService {
  private jwtToken: string;

  constructor(public http: HttpClient) {}

  authentication(CRUrl, user, password): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"

    });
    let options = { headers: headers };
    return this.http.post(
      CRUrl + "/v1/authentication",
      {
        username: user,
        password: password
      },
      options
    );
  }

  gettoken() {
    return this.jwtToken;
  }

  settoken(token) {
    this.jwtToken = token;
  }
}
