import {Component, Input, OnInit} from '@angular/core';
import {DataTableColumnConfig} from "./model/datatable.model";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() dataList: any[] = [];
  @Input() colConfig: DataTableColumnConfig[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
