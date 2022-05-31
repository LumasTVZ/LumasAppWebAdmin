import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteConfigComponent } from './site-config.component';
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "../tasks/tasks.component";
import {FormsModule} from "@angular/forms";
import {NzSliderModule} from "ng-zorro-antd/slider";

const routes: Routes = [
  {path: '', component: SiteConfigComponent}
]

@NgModule({
  declarations: [
    SiteConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NzSliderModule
  ]
})
export class SiteConfigModule { }
