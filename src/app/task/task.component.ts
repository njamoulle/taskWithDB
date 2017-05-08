import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskServiceService: TaskServiceService) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.taskServiceService.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }

}
