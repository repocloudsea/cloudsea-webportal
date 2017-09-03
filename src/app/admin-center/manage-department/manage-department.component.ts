import { Component, OnInit } from '@angular/core';
import { find, clone, findIndex } from 'lodash';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {DepartmentService} from '../shared/services/department.service';
import {Department} from '../shared/models/department.model';
import {flyInOutAnimation} from '../../shared/animations/fly-in-out.animation';

@Component({
  selector: 'app-manage-department',
  templateUrl: './manage-department.component.html',
  styleUrls: ['./manage-department.component.css'],
  providers: [DepartmentService],
  animations: [flyInOutAnimation]
})
export class ManageDepartmentComponent implements OnInit {
  departments: Department[];
  department: Department;
  searchCriteria: string;

  constructor(private utils: CommonUtilsService,
              private departmentService: DepartmentService) {
    this.departments = [];
    this.department = new Department();
  }

  ngOnInit() {
    this.departmentService.getDepartments()
      .subscribe((departments) => {
        this.departments = departments;
      }, (error) => {
        console.log('getDepartments() service falling');
      });
  }

  /*This method returns first letter of word in capital*/
  trimFirstCapAlpha(input: string): string {
    return this.utils.trimFirstCapAlpha(input);
  }

  /*This method search in business objects*/
  doSearch(input: string): void {
    this.searchCriteria = input;
  }

  /*This method helps *ngFor to improve performance*/
  trackByCode(index: number, object: Department): string {
    return object.code;
  }

  edit(department: Department): void {
    if (department && department.code) {
      this.department = clone(department);
    }
  }

  delete(department: Department): void {
    if (department && department.code) {
      const elementIndex = findIndex(this.departments, {'code': department.code});
      this.departments.splice(elementIndex, 1);
    }
  }

  save(): void {
    if (this.department && this.department.code) {
      const elementIndex = findIndex(this.departments, {'code': this.department.code});
      if (elementIndex === -1) {
        this.departments.push(clone(this.department));
      } else {
        this.departments[elementIndex] = clone(this.department);
      }
      this.department = new Department();
    }
  }

  cancel(): void {
    this.department = new Department();
  }
}
