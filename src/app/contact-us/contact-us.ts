import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {
 
@Output() close = new EventEmitter<void>();

closeDialog() {
  this.close.emit();
}

  form = new FormGroup({
    name: new FormControl('chen', [Validators.required, Validators.maxLength(18)]),
    email: new FormControl('chen@gmail.com', [Validators.required, Validators.email]),
    subject: new FormControl('subject', [Validators.maxLength(50)]),
    message: new FormControl('message'),
  })
  submit() {
    if (this.form.invalid) return;

    console.log("Form submitted:", this.form.value);
    this.form.reset(); // ניקוי הטופס
    this.closeDialog();
  }
  Cancel() {
    this.form.reset(); // ניקוי הטופס
     this.closeDialog(); 
  }
  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get subject() { return this.form.get('subject')!; }
  get message() { return this.form.get('message')!; }



}

