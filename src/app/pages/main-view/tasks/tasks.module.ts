import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import {RouterModule, Routes} from "@angular/router";
import {DatatableModule} from "../../../common/datatable/datatable.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

const routes: Routes = [
  {path: '', component: TasksComponent}
]

@NgModule({
  declarations: [
    TasksComponent,
    TasksEditComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DatatableModule,
        NzButtonModule,
        NzTableModule
    ]
})
export class TasksModule { }
