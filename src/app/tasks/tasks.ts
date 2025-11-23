import { Component, Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { ContactUs } from '../contact-us/contact-us';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask,ContactUs],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  tasks = fakeTasks;
  showTask = false;
  showContact = false;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  get userSelectedTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
  changeShowTask() {
    this.showTask = true;
  }
  ContactTask() {
    this.showContact = true;
  }
   addTask(taskData: { title: string; summary: string; dueDate: string }) {
    const newTask = {
      id: 't' + (this.tasks.length + 1), // יצירת id ייחודי
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    };
    this.tasks.push(newTask);
    this.showTask = false; // סוגר את ה-NewTask אחרי הוספה
  }
}
