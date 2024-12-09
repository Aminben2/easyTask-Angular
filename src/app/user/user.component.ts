import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';

// const index = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Old way without signals Angular < 16
  // selectedUser = DUMMY_USERS[index];

  // get imagePath(){
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }
  // onSelectUser(){
  //   const index = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[index];
  // }

  // selectedUser = signal(DUMMY_USERS[index]);
  // imagePath = computed(()=> "assets/users/"+ this.selectedUser().avatar)

  // onSelectUser() {
  //   const index = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[index])
  // }

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  @Input({required:true}) selected !: boolean;

  // just for more security
  // @Output() select = new EventEmitter<number>();

  // the new way to create an event
  // select = output<number>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id)
  }

  // inputs with signals
  // user = input.required<User>();

  // imagePath = computed(() => 'assets/users/' + this.user().avatar);
}

type User = {
  id: number;
  name: string;
  avatar: string;
};
