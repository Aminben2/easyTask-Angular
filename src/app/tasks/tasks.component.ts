import { Component, Input, input } from '@angular/core';
import { Task, TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../tasks';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent, TaskToAdd } from './new-task/new-task.component';
import { AlertComponent } from "../tools/alert/alert.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormsModule, NewTaskComponent, AlertComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: number;
  adding: boolean = false;
  alerting : boolean = false;

  usersTasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks(): Task[] {
    return this.usersTasks.filter((t) => t.userId === this.id);
  }

  onComplete(taskId: number) {
    this.usersTasks = this.usersTasks.filter((t) => t.id !== taskId);
  }
  onAddButton() {
    this.adding = true;
  }

  onCancel() {
    this.adding = false;
  }
  onTaskAdding(taskToAdd : TaskToAdd){
    this.usersTasks.unshift({
      id : this.usersTasks.length + 1,
      title:taskToAdd.title,
      summary : taskToAdd.summary,
      dueDate: taskToAdd.dueDate,
      userId: this.id
    })
    this.adding = false
    this.alerting = true
  }

  onCloseAlert(){
    this.alerting = false
  }
}
