import { Component, EventEmitter, Input, Output } from '@angular/core';

// // *** option 1
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// // *** option 2
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // output

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // console.log(this.id)
    this.select.emit(this.user.id);
  }
}
