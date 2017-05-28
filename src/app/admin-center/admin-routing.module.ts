import { ManageObjectsComponent } from './manage-objects/manage-objects.component';
import { ConfigureObjectsComponent } from './configure-objects/configure-objects.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const adminRouters: Routes = [
    {path: 'admin/configure-objects', component: ConfigureObjectsComponent},
    {path: 'admin/manage-objects', component: ManageObjectsComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(adminRouters)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AdminRoutingModule {}