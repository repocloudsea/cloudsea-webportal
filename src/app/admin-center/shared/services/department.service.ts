import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Department} from '../models/department.model';
import {Http, Response} from '@angular/http';
import {CommonUtilsService} from '../../../shared/services/common-utils.service';
import {environment} from '../../../../environments/environment';

@Injectable()
export class DepartmentService {

  constructor(private http: Http,
              private utils: CommonUtilsService) { }

  /*This method gets all departments*/
  getDepartments(): Observable<Department[]> {
    const options = this.utils.getRequestOptions();
    return this.http.get(environment.getDepartmentsMock, options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json() as Department[] || {};
  }
}
