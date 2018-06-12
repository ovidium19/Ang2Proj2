import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarRatingComponent} from '../../shared/star.component';
import {ConvertToSpaces} from '../../shared/convert-to-spaces.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    StarRatingComponent,
    ConvertToSpaces
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarRatingComponent,
    ConvertToSpaces
  ]
})
export class SharedModule { }
