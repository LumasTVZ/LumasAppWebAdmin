import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  @ViewChild('b') c!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    console.log("sdfsdfds")
  }

}
