import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/User';
import { Field } from '../models/field';

@Injectable()
export class ControlRoomService {

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

  verifyToken(user: User): Observable<any>{

    return this.http.get(user.crUrl+'/v1/authentication/token?token='+ user.token);
  }

  getDeviceList(user:User): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Authorization": user.token

    });
    return this.http.post(user.crUrl+ "/v2/devices/list" , {
      "filter": {
         "value": user.userId,
         "field": "userId"
      }},
      {headers: headers}
      );
  }

  getFileID(user:User, path): Observable<any> {

    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Authorization": user.token

    });
    return this.http.post(user.crUrl+ "/v2/repository/file/list" ,{
      "fields": [
        "path"
      ],
      "filter": {
        "operator": "eq",
        "field": "path",
        "value": path
      }
    },
      {headers: headers}
      );

  }

  deploymentWithVariables(botVariables,fileId, deviceId, fields:Field[], user:User): Observable<any> {

    console.log(botVariables);
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Authorization": user.token

    });
    return this.http.post(user.crUrl+ "/v2/automations/deploy" ,{
      "fileId": fileId,
      "deviceIds": [
        deviceId
      ],
      "runWithRdp": false,
     botVariables
    },
      {headers: headers}
      );

  }
}
