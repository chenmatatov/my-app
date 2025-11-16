import { Component, Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  tasks = fakeTasks;
  showTask=false;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  get userSelectedTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
  changeShowTask(){
    this.showTask=true;}
}
