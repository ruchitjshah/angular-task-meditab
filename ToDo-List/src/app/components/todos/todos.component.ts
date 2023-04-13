import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
  dragEl:any;
  @ViewChildren("dragTodo") levels!: QueryList<ElementRef>;
  
  constructor(){
    this.localItem = localStorage.getItem("todos") || '{}';
    this.todos = JSON.parse(this.localItem); 
  }

  ngAfterViewInit(){

    if (this.levels['_results']) {
      // console.log(this.levels['_results'])
      var items = this.levels['_results'].map((el: ElementRef) => el.nativeElement);
      console.log(items)
      var dragEl: any = null;

      function handleDragStart(e: any) {
        // console.log("hello",e);  
        
        e.target.style.opacity = '0.4';

        dragEl = e;
        // console.log("handleDragStart from c",e);
        console.log("Drag Start",e.target.innerHTML);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', e.target.innerHTML);
        console.log(e.dataTransfer.getData('text'));
        
      }

      function handleDragOver(e: any) {
        if (e.preventDefault) {
          e.preventDefault();
        
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
      }

      function handleDragEnter(e: any) {
        e.target.classList.add('over');
        console.log("meet chodu",e.target);
        
        
      }

      function handleDragLeave(e: any) {
        // e.target.classList.remove('over');
      }

      function handleDrop(e: any) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }

        if (dragEl != e) {
          dragEl.innerHTML = e.target.innerHTML;
          e.target.innerHTML = e.dataTransfer.getData('text');
        }

        return false;
      }

      function handleDragEnd(e: any) {
        e.target.style.opacity = '1';
        

        items.forEach(function (item: any) {
          item.classList.remove('over');
        });
      }

      items.forEach(function (item: any) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
      });
    }

  }

  handleDragStart(e: any) {
    console.log('e', e);
    e.target.style.opacity = '0.4';

    // this.dragEl = e;
    // console.log(this, e.innerHTML);

    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text', e.innerHTML);
  }

  handleDragOver(e: any) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  handleDragEnter(e: any) {
    e.target.classList.add('over');
    console.log("hey:",e);;
    
  }

  handleDragLeave(e: any) {
    e.target.classList.remove('over');
  }

  handleDrop(e: any) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (this.dragEl != e) {
      this.dragEl.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text');
    }

    return false;
  }

  handleDragEnd(e: any) {
    e.target.style.opacity = '1';
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


