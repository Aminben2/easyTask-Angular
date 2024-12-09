import { Component, inject, Input, input } from '@angular/core';
import { Task, TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent, TaskToAdd } from './new-task/new-task.component';
import { AlertComponent } from '../tools/alert/alert.component';
import { TasksService } from './TasksService';

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
  alerting: boolean = false;
  private taskService: TasksService = inject(TasksService);

  get userTasks() {
    return this.taskService.getUserTasks(this.id);
  }

  onComplete(taskId: number) {
    this.taskService.removeTask(taskId);
  }

  onCloseAlert() {
    this.alerting = false;
  }

  onAddButton() {
    this.adding = true;
  }

  onCancel() {
    this.adding = false;
  }

  onAlert(){
    this.alerting = true
  }
}
