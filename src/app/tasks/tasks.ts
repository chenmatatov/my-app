import { Component, Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { TaskComponent } from './task/task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  tasks = fakeTasks;

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  get userSelectedTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
