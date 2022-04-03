import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LocationComponent} from "./location.component";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {path: '', component: LocationComponent}
]


@NgModule({
  declarations: [
    LocationComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LocationModule {
}
