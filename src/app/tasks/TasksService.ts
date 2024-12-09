import { Injectable } from '@angular/core';
import { Task } from './task/task.component';
import { DUMMY_TASKS } from '../tasks';
import { TaskToAdd } from './new-task/new-task.component';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;
  getUserTasks(userId: number) {
    console.log(userId);
    return this.tasks.filter((t) => t.userId == userId);
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  addTask(task: TaskToAdd, userId: number) {
    this.tasks.unshift({
      id: this.tasks.length + 1,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: userId,
    });
  }
}
