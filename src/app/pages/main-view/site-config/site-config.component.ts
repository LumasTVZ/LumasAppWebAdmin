import { Component, OnInit } from '@angular/core';
import {CoreProvider} from "../core.provider";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {FontDirective} from "../../directive/font.directive";

@Component({
  selector: 'app-site-config',
  templateUrl: './site-config.component.html',
  styleUrls: ['./site-config.component.css'],
  viewProviders: [FontDirective]
})
export class SiteConfigComponent implements OnInit {
  fontSize: number = 12;
  fontColor: string = ''

  constructor(private coreProvider: CoreProvider,
              private notificationService: NzNotificationService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.coreProvider.setSiteConfig({fontSize: this.fontSize, fontColor: this.fontColor})
    this.notificationService.success('Site config', 'Site config applied successfully, please refresh the page');

  }

}
