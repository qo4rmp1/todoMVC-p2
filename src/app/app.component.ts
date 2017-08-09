import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo = '';

  addtodo() {
    this.todos.push({
      title: this.todo,
      done: false
    });
    this.todo = '';
  }

  doClertodos() {
    this.todos = this.todos.filter(todo=>{!todo.done});
  }
}
