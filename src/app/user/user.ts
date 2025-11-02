import { Component , Input, EventEmitter, Output} from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() id!: string;
  @Output() userSelected = new EventEmitter<string>();



get userImgPath() {
  return 'assets/users/' + this.avatar;
  }
  onSelect(){
    this.userSelected.emit(this.id)
  }
                                                                                      
}
