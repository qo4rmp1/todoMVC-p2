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
    if (this.todo) {
      this.todos.push({
        title: this.todo,
        done: false
      });
      this.todo = '';
    }
  }

  doClertodos() {
    this.todos = this.todos.filter(todo=>{ return !todo.done; });
  }

  filterType;
  doChangeFilterType(val) {
    this.filterType = val;
  }

  toggleAll: boolean = false;
  doToggleAll(val) {
    this.todos.forEach(items=>{items.done = val});
  }

  updateToggleAllState() {
    this.toggleAll = this.todos.filter(item=>{ return !item.done; }).length === 0;
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
