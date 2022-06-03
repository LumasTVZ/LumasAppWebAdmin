import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontDirective} from "./font.directive";



@NgModule({
  declarations: [FontDirective],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [FontDirective]
})

export class DirectiveModule { }
