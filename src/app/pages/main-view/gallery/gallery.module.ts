import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {RouterModule, Routes} from "@angular/router";
import {LocationComponent} from "../location/location.component";

const routes: Routes = [
  {path: '', component: GalleryComponent}
]

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    NzWaveModule,
    NzButtonModule,
    NzCarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryModule { }
