
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageObjectsComponent } from './manage-objects/manage-objects.component';
import { ConfigureObjectsComponent } from './configure-objects/configure-objects.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent, ManageObjectsComponent, ConfigureObjectsComponent]
})
export class AdminCenterModule { }
