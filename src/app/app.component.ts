import { Todo } from './../models/todo.model';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ToDo';
  lastId: number = 1;
  public todos: Todo[] = [];

  constructor() {}

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo); //Captura o indice do item recebido ou retorna -1 caso não tenha
    if (index !== -1) { //caso tenha encontrado
      this.todos.splice(index, 1); //remove ele da lista com splice(indice, deletar um registro)
    }
  }

  update(todo: Todo, input: any) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      todo.title.concat(todo.title, input);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

  addTask(input: any) {
    this.todos.push(new Todo(this.lastId, input.value, false));
    this.lastId++
    input.value = ''
  }

  resetAll() {
    this.todos = [];
    this.lastId = 1;
  }
}

/*
(action)="function()"           HTML -> TS
{{variable}}                    TS -> HTML
[class.new-class]="condicion"   TS -> HTML
[(ngModel)]="propriety"         TS <-> HTML
*/
