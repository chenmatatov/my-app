import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
title='chen';
summary='';
due_date='';
newTask(form:NgForm)
{
console.log("from",form);
}
}
