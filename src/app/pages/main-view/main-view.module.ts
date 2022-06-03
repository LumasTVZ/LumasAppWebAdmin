import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {RouterModule, Routes} from "@angular/router";
import {DatatableModule} from "../../common/datatable/datatable.module";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzNotificationModule} from "ng-zorro-antd/notification";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FontDirective} from "../directive/font.directive";


const routes: Routes = [
  {path: '', component: MainViewComponent, children: [
    {path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
    {path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
    {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    {path: 'page-settings', loadChildren: () => import('./site-config/site-config.module').then(m => m.SiteConfigModule) }
    ]
  }
]


@NgModule({
  declarations: [
    MainViewComponent
  ],
  exports: [RouterModule],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        RouterModule.forChild(routes),
        DatatableModule,
        NzPageHeaderModule,
        NzGridModule,
        NzNotificationModule,
        NzButtonModule
    ]
})
export class MainViewModule { }
