import { Component, input, output, computed } from '@angular/core';
import { UserObj } from '../user/user.model';

@Component({
  selector: 'app-user-with-signals',
  imports: [],
  templateUrl: './user-with-signals.html',
  styleUrl: './user-with-signals.css'
})
export class UserWithSignals {
  user = input<UserObj>();
  isSelected = input<boolean>();
  userClicked = output<string>();
  imagePath = computed(() => 'assets/users/' + this.user()!.avatar)

  onUserClicked() {
    if (this.user()) {
      this.userClicked.emit(this.user()!.id);
    }
  }
}
