import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  deleteTodoItem(todo: Todo){
    this.todoDelete.emit(todo);
  }

  updateTodoItem(todo: Todo){
    this.todoUpdate.emit(todo);
  }

  todoCheck(todo: Todo){
    this.todoCheckbox.emit(todo);
  }
}
