import {TemplateRef} from "@angular/core";

export class DataTableColumnConfig {
  columnName?: string;
  columnPropertyFieldName?: string = '';
  templateRef?: TemplateRef<any> | null = null;
}
