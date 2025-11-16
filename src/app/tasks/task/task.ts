import { Component, Input } from '@angular/core';
import { Taskobj } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input({ required: true }) task!: Taskobj;
}
