import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {RouterModule, Routes} from "@angular/router";
import {DatatableModule} from "../../common/datatable/datatable.module";


const routes: Routes = [
  {path: '', component: HomeComponent}
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule.forChild(routes),
    DatatableModule
  ]
})
export class HomeModule { }
