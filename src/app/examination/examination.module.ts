import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { ExamHomeComponent } from './exam-home/exam-home.component';
import { ExaminationService } from './shared/examination.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ExamHomeComponent
  ],
  exports: [
    ExamHomeComponent
  ],
  providers: [
    ExaminationService
  ]
})
export class ExaminationModule { }
