import { SharedModule } from './../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageDataComponent } from './manage-data/manage-data.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageDepartmentComponent } from './manage-department/manage-department.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [AdminDashboardComponent, ManageDataComponent, ManageDepartmentComponent]
})
export class AdminCenterModule { }
