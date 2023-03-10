import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  
  localItem: string;
  todos: Todo[];
  toggleButton: string = "Add Todo";
  updateTodoVal!: object;
  updateTodoIndex!: number;
  
  constructor(){
    this.localItem = localStorage.getItem("todos") || '{}';
    this.todos = JSON.parse(this.localItem); 
  }
  
  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }

  setUpdateTodo(todo: Todo){
    this.toggleButton = "Update Todo";
    this.updateTodoIndex = this.todos.indexOf(todo);
    this.updateTodoVal = Object.assign({}, (this.todos[this.updateTodoIndex]));
  }
  
  todoUpdateValue(todo: Todo){
    this.todos[this.updateTodoIndex].title = todo.title;
    this.todos[this.updateTodoIndex].desc = todo.desc;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.toggleButton = "Add Todo";
  }

  todoDone(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}


