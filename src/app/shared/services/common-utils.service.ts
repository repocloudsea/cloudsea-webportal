import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class CommonUtilsService {

  constructor() { }

  /*This method returns first letter of word in capital*/
  trimFirstCapAlpha(input: string): string {
    if (input) {
      return input.substring(0, 1).toUpperCase();
    }
    return input;
  }

  /*This method returns headers required for service request*/
  getRequestOptions(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return options;
  }
}
