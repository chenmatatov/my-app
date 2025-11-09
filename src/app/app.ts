import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,User,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  users=USERS

  selsctedUser?:any
  onUserSelected(idUser:string){
    const user = this.users.find((user)=>user.id===idUser)
    if(user)
    this.selsctedUser=user;
    
   
  }
}
