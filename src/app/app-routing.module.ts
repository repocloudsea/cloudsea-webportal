import { ManageObjectsComponent } from './admin-center/manage-objects/manage-objects.component';
import { ConfigureObjectsComponent } from './admin-center/configure-objects/configure-objects.component';
import { AdminDashboardComponent } from './admin-center/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/errors/not-found/not-found.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin/dashboard', component: AdminDashboardComponent},
  {path: 'admin/configure-objects', component: ConfigureObjectsComponent},
  {path: 'admin/manage-objects', component: ManageObjectsComponent},
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
