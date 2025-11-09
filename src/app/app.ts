import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';
import { UserWithSignals } from './user-with-signals/user-with-signals';
import { UserObj } from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, UserWithSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  users = signal(USERS);
  selectedUser = signal<UserObj | null>(null);

  onUserSelected(userId: string) {
    const user = this.users().find(u => u.id === userId) || null;
    this.selectedUser.set(user);
  }

}
