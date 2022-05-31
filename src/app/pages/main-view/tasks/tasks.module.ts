import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import {RouterModule, Routes} from "@angular/router";
import {DatatableModule} from "../../../common/datatable/datatable.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

const routes: Routes = [
  {path: '', component: TasksComponent}
]

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DatatableModule,
    NzButtonModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDatePickerModule
  ]
})
export class TasksModule { }
