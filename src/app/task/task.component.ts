import { Component, Input } from '@angular/core';
import { EachTaskComponent } from './each-task/each-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './each-task/each-task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [EachTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true; // hide task >> show adding task model
  }

  onCancelAddTask() {
    this.isAddingTask = false; // = show task
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    this.isAddingTask = false;
  }
}
