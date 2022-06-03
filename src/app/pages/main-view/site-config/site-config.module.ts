import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteConfigComponent } from './site-config.component';
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "../tasks/tasks.component";
import {FormsModule} from "@angular/forms";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {ColorPickerModule} from "ngx-color-picker";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FontDirective} from "../../directive/font.directive";
import {DirectiveModule} from "../../directive/directive.module";

const routes: Routes = [
  {path: '', component: SiteConfigComponent}
]

@NgModule({
  declarations: [
    SiteConfigComponent,

  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        NzSliderModule,
        ColorPickerModule,
        NzGridModule,
      DirectiveModule,
        NzButtonModule,
    ],
  providers: []

})
export class SiteConfigModule { }
