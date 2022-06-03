import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hr_HR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hr from '@angular/common/locales/hr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {DatatableModule} from "./common/datatable/datatable.module";

registerLocaleData(hr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    DatatableModule
  ],
  exports: [],
  providers: [{ provide: NZ_I18N, useValue: hr_HR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
