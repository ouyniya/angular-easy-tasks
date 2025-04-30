import { Component, Input } from '@angular/core';

import { type Task } from './each-task.model';

@Component({
  selector: 'app-each-task',
  standalone: true,
  imports: [],
  templateUrl: './each-task.component.html',
  styleUrl: './each-task.component.css',
})
export class EachTaskComponent {
  @Input({ required: true }) task!: Task;
}
