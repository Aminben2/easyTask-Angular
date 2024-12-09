import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../tools/alert/alert.component';
import { TasksService } from '../TasksService';

export interface TaskToAdd {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  title = '';
  summary = '';
  dueDate = '';
  alerting = false;
  alertMsg!: string;
  alertStyle!: string;

  @Output() cancel = new EventEmitter();
  @Output() alert = new EventEmitter();
  @Input({ required: true }) userId!: number;

  tasksService: TasksService = inject(TasksService);

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (
      this.title.trim() === '' ||
      this.summary.trim() === '' ||
      this.dueDate.trim() === ''
    ) {
      this.alerting = true;
      this.alertStyle = 'error';
      this.alertMsg = 'All fields are required';
      return;
    }

    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId
    );
    this.cancel.emit()
    this.alert.emit()
  }

  onCloseAlert() {
    this.alerting = false;
  }
}
