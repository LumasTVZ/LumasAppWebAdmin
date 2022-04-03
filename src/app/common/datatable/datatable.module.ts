import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import {NzTableModule} from "ng-zorro-antd/table";


const declarations = [DatatableComponent];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations],
  imports: [
    CommonModule,
    NzTableModule
  ]
})
export class DatatableModule { }
