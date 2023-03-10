import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnChanges{
  title?: string;
  desc?: string;
  @Input() buttonType: string | null = null;
  @Input() updateTodoVal: object | any = null;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdateValue: EventEmitter<Todo> = new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void {

    if('updateTodoVal' in changes) {
    this.title = this.updateTodoVal?.title;
    this.desc = this.updateTodoVal?.desc;
    console.log(changes);
    }
   
    
  }
  
  addTodo(formTodo: NgForm)
  { 
    if(this.buttonType === "Add Todo"){
      if(this.title != undefined && this.title.trim() != ""){
        const todo = {
          title: this.title.trim(),
          desc: this.desc,
          active: true
        }
        this.todoAdd.emit(todo);
        formTodo.reset();
        
      }
      else{
        alert("Please enter the task title!");
      }
    }
    else{
      if(this.title != undefined && this.title.trim() != ""){
        const todo = {
          title: this.title.trim(),
          desc: this.desc,
          active: true
        }
        this.todoUpdateValue.emit(todo);
        formTodo.reset();
        
      }
      else{
        alert("Please enter the task title!");
      }
      
    }
  }
  
}
