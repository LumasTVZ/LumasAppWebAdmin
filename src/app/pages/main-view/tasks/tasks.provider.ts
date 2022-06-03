import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "./tasks.component";

@Injectable()
export class TasksProvider {

  constructor(private http: HttpClient) {
  }


  getServerTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3001/tasks')
  }
}
