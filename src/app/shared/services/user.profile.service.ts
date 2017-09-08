import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {CommonUtilsService} from './common-utils.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserProfileService {

  constructor(private http: Http,
              private utils: CommonUtilsService) { }

  /*This method gets user profile*/
  getProfile(): Observable<User> {
    const options = this.utils.getRequestOptions();
    return this.http.get(environment.getProfileMock, options)
      .map((res: Response) => res.json());
  }
}
