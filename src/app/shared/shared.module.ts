import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterByPipe } from './pipes/filter-by.pipe';
import {FormsModule} from '@angular/forms';
import {CommonUtilsService} from './services/common-utils.service';
import {UserProfileService} from './services/user.profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchBarComponent, FilterByPipe],
  declarations: [SearchBarComponent, FilterByPipe],
  providers: [CommonUtilsService, UserProfileService]
})
export class SharedModule { }
