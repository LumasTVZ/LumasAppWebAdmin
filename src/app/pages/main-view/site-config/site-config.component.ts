import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-config',
  templateUrl: './site-config.component.html',
  styleUrls: ['./site-config.component.css']
})
export class SiteConfigComponent implements OnInit {
  fontSize: number=12;
  fontColor: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
