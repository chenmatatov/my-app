import { Component, input,EventEmitter, output, computed} from '@angular/core';
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
// import { USERS } from '../fake_users';
// import { UserObj } from '../user/user.model';
// import { User } from '../user/user';

// @Component({
//   selector: 'app-users-with-signals',
//   imports: [],
//   templateUrl: './users-with-signals.html',
//   styleUrl: './users-with-signals.css'
// })
// export class UsersWithSignals {
//   user = input<UserObj>();   
//   isSelected = input<boolean>();
//   userClicked = output<string>(); 
//   imagePath = computed(() => 'assets/users/' + this.user()!.avatar)

//   onUserClicked(){
//     this.userClicked.emit(this.user()!.id)
//   }
// }