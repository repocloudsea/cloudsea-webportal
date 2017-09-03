import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterByPipe } from './pipes/filter-by.pipe';
import {FormsModule} from '@angular/forms';
import {CommonUtilsService} from './services/common-utils.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchBarComponent, FilterByPipe],
  declarations: [SearchBarComponent, FilterByPipe],
  providers: [CommonUtilsService]
})
export class SharedModule { }
