import { Component, Input } from '@angular/core';
import { EachTaskComponent } from './each-task/each-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './each-task/each-task.model';
import { TaskService } from './task.service';

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

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserIdTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true; // hide task >> show adding task model
  }

  onCloseAddTask() {
    this.isAddingTask = false; // = show task
  }
}
