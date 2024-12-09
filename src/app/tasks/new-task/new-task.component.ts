import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../tools/alert/alert.component';

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
  alertMsg !: string;
  alertStyle !: string;

  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<TaskToAdd>();

  onCancel() {
    this.cancel.emit();
    this.title = '';
    this.summary = '';
    this.dueDate = '';
  }

  onSubmit() {
    if (
      this.title.trim() === '' ||
      this.summary.trim() === '' ||
      this.dueDate.trim() === ''
    ) {
      this.alerting = true;
      this.alertStyle = "error"
      this.alertMsg= "All fields are required"
      return;
    }

    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });

    this.title = '';
    this.summary = '';
    this.dueDate = '';
  }

  onCloseAlert(){
    this.alerting = false
  }
}
