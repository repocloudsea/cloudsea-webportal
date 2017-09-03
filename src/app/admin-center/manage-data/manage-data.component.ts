import { ManageDataService } from './../shared/services/manage-data.service';
import { Component, OnInit } from '@angular/core';
import {BusinessObject} from '../shared/models/business-object.model';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import { flyInOutAnimation } from '../../shared/animations/fly-in-out.animation';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css'],
  providers: [ManageDataService],
  animations: [flyInOutAnimation]
})
export class ManageDataComponent implements OnInit {
  businessObjects: BusinessObject[];
  searchCriteria: string;

  constructor(private manageDataService: ManageDataService,
              private utils: CommonUtilsService) {
    this.businessObjects = [];
  }

  ngOnInit() {
    this.manageDataService.getAllBusinessObjects()
      .subscribe((response) => {
        this.businessObjects = response;
      }, (error) => {
        console.log('getAllBusinessObjects() service falling');
      });
  }

  /*This method returns first letter of word in capital*/
  trimFirstCapAlpha(input: string): string {
    return this.utils.trimFirstCapAlpha(input);
  }

  /*This method helps *ngFor to improve performance*/
  trackById(index: number, object: BusinessObject): string {
    return object.id;
  }

  /*This method search in business objects*/
  doSearch(input: string): void {
    this.searchCriteria = input;
  }
}
