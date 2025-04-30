import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

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
