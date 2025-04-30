import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1' // initial value

  // return user obj
  get selectedUser() {
    return this.users.find(item => item.id === this.selectedUserId)
  }
  
  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
