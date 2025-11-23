import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import { from } from 'rxjs';
import { NewTaskData } from './type.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() add = new EventEmitter<NewTaskData>();
  @Output() close = new EventEmitter<void>();
title='title';
summary='summary';
due_date='';

closeTask() {
  this.close.emit();
}

newTask(form:NgForm)
{
    if (form.invalid) return;

    const newTask: NewTaskData = {
      title: this.title,
      summary: this.summary,
      dueDate: this.due_date
    };
     this.add.emit(newTask);  // שולח ל-Tasks
    form.resetForm();         // מנקה את הטופס
    this.closeTask(); 
  }
}
