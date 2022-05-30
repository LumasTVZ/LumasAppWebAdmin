import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {RouterModule, Routes} from "@angular/router";
import {NzButtonModule} from "ng-zorro-antd/button";


const routes: Routes = [
  {path: '', component: ContactComponent}
]
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    RouterModule.forChild(routes),
    NzButtonModule
  ]
})
export class ContactModule { }
