/*
    @name
        Networking Service
    @description
        A shared networking service which is useful to place all network and API end-point information in one place
*/
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { apiBaseUrl } from './globalConfig';

@Injectable()
export class NetworkingService {
    constructor(
        private http: Http,
        private _router: Router
    ) {    }

    get(url: string, options?: Object): Observable<any>{
        const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        if (!options) {
          options = new RequestOptions({ headers: headers });
        }

        return this.http.get(apiBaseUrl + url, options)
          .map(this.extractData)
          .catch(this.handleError);
    }

    post(url: string, data: any, options?: Object): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        if (!options) {
          options = new RequestOptions({ headers: headers });
        }

        return this.http.post(apiBaseUrl + url, data, options)
          .map(this.extractData)
          .catch(this.handleError);
    }

    private extractData(res: Response) {
          let body = res.json();
          if (typeof body === 'string'){
              body = JSON.parse(body);
          }
          return body;
    }

    // Error handling
    private handleError(error: Response | any){
        const returnObject = {status: error.status, Error: '', statusText: ''};
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.Error || JSON.stringify(body);
            returnObject.Error = err;
            returnObject.statusText = error.statusText;
        }
        return Observable.throw(returnObject);
    }

    HttpError(httpError: any){
        console.log(httpError);
        if (httpError.status === 0) {
            this._router.navigate(['/error/server-down']);
        }
        if (httpError.status === 401) {
            this._router.navigate(['/']);
        }

        const isJson = JSON.parse(httpError.Error);
        if( (typeof isJson === 'object') && (isJson !== null) ) {
            return isJson.Message + ' : ' + httpError.statusText + ' (' + httpError.status + ')';
        } else {
            return httpError.Error;
        }
    }
}
