import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: number,
  title : string,
  summary : string,
  dueDate : string,
  userId: number
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required :true}) task !: Task;
  @Output() complete = new EventEmitter<number>();

  onCompleteButtonClicked(){
    this.complete.emit(this.task.id);
  }
}
