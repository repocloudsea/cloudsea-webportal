import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { mockExamService } from './../../shared/globalConfig';
import { ExaminationModel } from './examination.model';

import { NetworkingService } from './../../shared/networking.service'

@Injectable()
export class ExaminationService {
  constructor(
    private _networkingService: NetworkingService
  ) {}

  getAllExams() {
    // Actual API Call
    /*let url = "GetExams",
      return this._networkingService.get(url).map(
          (res) => {
              let ExamsArr: ExaminationModel[] = [];
              let output = (typeof res === 'string') ? JSON.parse(res) : res;
              if (output) {
                  for (let i = 0; i < output.length; i++) {
                      ExamsArr.push(new ExaminationModel(output[i]));
                  }
              }
              return ExamsArr;
      });*/

      // Utilizing Mock JSON for local -- TO BE REPLACED
      let res = mockExamService;
      let ExamsArr = [];
              if (res) {
                  for (let i = 0; i < res.length; i++) {
                      ExamsArr.push(res[i]);
                  }
              }
      return ExamsArr;
  }
}
