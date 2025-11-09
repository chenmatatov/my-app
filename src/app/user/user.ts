import { Component , Input, EventEmitter, Output} from '@angular/core';
import { UserObj } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!: UserObj;
  @Input({required:true}) isSelected!: boolean;
  @Output() userSelected = new EventEmitter<string>();



get userImgPath() {
  return 'assets/users/' + this.user.avatar;
  }
  onSelect(){
    this.userSelected.emit(this.user.id)
  }
                                                                                      
}
