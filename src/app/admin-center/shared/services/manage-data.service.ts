import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BusinessObject} from '../models/business-object.model';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import {CommonUtilsService} from '../../../shared/services/common-utils.service';

@Injectable()
export class ManageDataService {

  constructor(private http: Http,
              private utils: CommonUtilsService) { }

  /*This method gets all business object*/
  getAllBusinessObjects(): Observable<BusinessObject[]> {
    const options = this.utils.getRequestOptions();
    return this.http.get(environment.getAllBusinessObjectsMock, options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json() as BusinessObject[] || {};
  }
}
