import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  isCollapsed = false;
  @ViewChild('b') c!: TemplateRef<any>;

  constructor(private notificationService: NzNotificationService) { }

  ngOnInit(): void {
  }

  showNotification(index: number): void {
    this.notificationService.success('BRAVO', 'klik s indexom ' + index)
  }

}
