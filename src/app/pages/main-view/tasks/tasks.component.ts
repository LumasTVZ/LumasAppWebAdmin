import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataTableColumnConfig} from "../../../common/datatable/model/datatable.model";


interface Task {
  taskName: string;
  department: string;
  assignedTo: string;
  status: string;
  dueTo: string | Date;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  sortTaskName = (a: Task, b:Task) => a.taskName.localeCompare(b.taskName)
  sortDepartment = (a: Task, b:Task) => a.department.localeCompare(b.department)
  sortAssignedTo = (a: Task, b:Task) => a.assignedTo.localeCompare(b.assignedTo)
  sortStatus = (a: Task, b:Task) => a.status.localeCompare(b.status)
  sortDueTo = (a: Task, b:Task) => new Date(a.dueTo).getTime() - new Date(b.dueTo).getTime()
  @ViewChild('action') action!: TemplateRef<any>
  data: Task[] = [{taskName: 'ddd', department: 'it', assignedTo: 'danijel', status: 'pending', dueTo: '2022-09-22'}];


  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTask(index: any): any {
    this.data.splice(index, 1);
  }

}
