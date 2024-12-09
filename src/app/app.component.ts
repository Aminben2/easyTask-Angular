import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './data';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  name!: string;
  id!: number;

  select(id: number) {
    let item = this.users.find((u) => u.id === id);
    if (item) {
      this.name = item.name;
      this.id = id;
    } else console.log('The user not found !');
  }
}
