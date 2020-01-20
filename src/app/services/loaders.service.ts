import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoadersService {

  constructor(public http: HttpClient) { }

  getConfigFile() : Observable<any> {

    return this.http.get('config/configuration.json');

  }
}