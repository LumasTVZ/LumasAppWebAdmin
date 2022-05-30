import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {Route, RouterModule, Routes} from "@angular/router";
import {LocationComponent} from "../main-view/location/location.component";
import {NzButtonModule} from "ng-zorro-antd/button";

const routes: Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        NzButtonModule
    ]
})
export class LoginModule { }
