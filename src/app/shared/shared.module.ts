import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SearchBarComponent],
  declarations: [SearchBarComponent]
})
export class SharedModule { }
