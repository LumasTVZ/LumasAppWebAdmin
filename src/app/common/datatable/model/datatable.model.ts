import {TemplateRef} from "@angular/core";

export class DataTableColumnConfig {
  columnName?: string;
  columnPropertyFieldName?: string = '';
  compare?: (a: any, b: any) => any;
  priority?: any;
  templateRef?: TemplateRef<any> | null = null;
}
