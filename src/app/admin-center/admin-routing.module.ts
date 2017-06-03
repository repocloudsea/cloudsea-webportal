import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const adminRouters: Routes = [ ];

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