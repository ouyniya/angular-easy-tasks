import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from './each-task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-each-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './each-task.component.html',
  styleUrl: './each-task.component.css',
})
export class EachTaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>()
  
  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
}
