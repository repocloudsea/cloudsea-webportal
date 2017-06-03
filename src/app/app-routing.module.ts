import { ManageDepartmentComponent } from './admin-center/manage-department/manage-department.component';
import { ManageDataComponent } from './admin-center/manage-data/manage-data.component';
import { AdminDashboardComponent } from './admin-center/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin/dashboard', component: AdminDashboardComponent},
  {path: 'admin/manage', component: ManageDataComponent},
   {path: 'admin/manage/department', component: ManageDepartmentComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
