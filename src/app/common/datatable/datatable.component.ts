import {Component, Input, OnInit} from '@angular/core';
import {DataTableItem} from "./model/datatable.model";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() data: DataTableItem[] = [];
  @Input() colNames: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
