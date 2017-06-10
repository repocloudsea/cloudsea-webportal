import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

import { ExaminationService } from './../shared/examination.service';
import { ExaminationModel } from './../shared/examination.model';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.css']
})
export class ExamHomeComponent implements OnInit {
  exams: any;
  categories: any;
  constructor(private _examService: ExaminationService) { }

  ngOnInit() {
    this.exams = this._examService.getAllExams();
    this.categories = _.uniqBy(this.exams, 'category');
    console.log(this.categories);
  }

}
