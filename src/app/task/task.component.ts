import { Component, Input } from '@angular/core';
import { EachTaskComponent } from "./each-task/each-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [EachTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() name?: string;
}
