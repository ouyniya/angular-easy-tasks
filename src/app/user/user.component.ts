import { Component, EventEmitter, Input, Output } from '@angular/core';

// // *** option 1
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// // *** option 2
interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter(); // output

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // console.log(this.id)
    this.select.emit(this.user.id);
  }
}
