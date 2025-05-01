import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
// config: https://angular.dev/api/common/DatePipe

import { type Task } from './each-task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-each-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './each-task.component.html',
  styleUrl: './each-task.component.css',
})
export class EachTaskComponent {
  @Input({ required: true }) task!: Task;

  private taskService = inject(TaskService)

  onCompleteTask() {
    this.taskService.removeTask(this.task.id)
  }
}
