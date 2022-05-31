import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataTableColumnConfig} from "../../../common/datatable/model/datatable.model";
import {NzModalService} from "ng-zorro-antd/modal";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzTableSortFn} from "ng-zorro-antd/table";


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
  sortTaskName: NzTableSortFn<Task> = (a: Task, b:Task, c) => {
    if (c === 'ascend') {
      this.dataDisplay.sort((a, b) => a.taskName.localeCompare(b.taskName));
    } else {
      this.dataDisplay.sort((a, b) => b.taskName.localeCompare(a.taskName));
    }
    return 1
  }
  sortDepartment: NzTableSortFn<Task> = (a: Task, b:Task, c) => {
    if (c === 'ascend') {
      this.dataDisplay.sort((a, b) => a.department.localeCompare(b.department));
    } else {
      this.dataDisplay.sort((a, b) => b.department.localeCompare(a.department));
    }
    return 1
  }
  sortAssignedTo: NzTableSortFn<Task> = (a: Task, b:Task, c) => {
    if (c === 'ascend') {
      this.dataDisplay.sort((a, b) => a.assignedTo.localeCompare(b.assignedTo));
    } else {
      this.dataDisplay.sort((a, b) => b.assignedTo.localeCompare(a.assignedTo));
    }
    return 1
  }
  sortStatus: NzTableSortFn<Task> = (a: Task, b:Task, c) => {
    if (c === 'ascend') {
      this.dataDisplay.sort((a, b) => a.status.localeCompare(b.status));
    } else {
      this.dataDisplay.sort((a, b) => b.status.localeCompare(a.status));
    }
    return 1
  }
  sortDueTo: NzTableSortFn<Task> = (a: Task, b:Task, c) => {
    if (c === 'ascend') {
      this.dataDisplay.sort((a, b) => new Date(a.dueTo).getTime() - new Date(b.dueTo).getTime());
    } else {
      this.dataDisplay.sort((a, b) => new Date(b.dueTo).getTime() - new Date(a.dueTo).getTime());
    }
    return 1
  }
  @ViewChild('action') action!: TemplateRef<any>
  data: Task[] = [
    {taskName: 'ddd', department: 'it', assignedTo: 'danijel', status: 'pending', dueTo: '2022-09-22'},
    {taskName: 'a', department: 'a', assignedTo: 'danijel', status: 'pending', dueTo: '2022-09-22'}
  ];
  dataDisplay: Task[] = [...this.data];
  isVisible: boolean = false;
  taskForm!: FormGroup

  constructor(private notificationService: NzNotificationService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.taskForm = new FormGroup({
      'taskName': new FormControl(null, Validators.required),
      'department': new FormControl(null, Validators.required),
      'assignedTo': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
      'dueTo': new FormControl(null, Validators.required),
    })
  }

  deleteTask(index: any): any {
    this.data.splice(index, 1);
    this.notificationService.success('Task', 'Task deleted successfully');
  }

  handleCancel(): void {
  this.taskForm.reset();
  this.isVisible = false
  }

  handleSubmit(): void {
    if (this.taskForm.valid) {
      this.data.push(this.taskForm.value as Task)
      this.isVisible = false;
      this.notificationService.success('Task', 'Task added successfully');
      this.taskForm.reset();
    } else {
      Object.values(this.taskForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
