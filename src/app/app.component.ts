import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo = '';
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get(this.apiUrl)
    .subscribe(src=> {
      this.todos = src.json();
    });
  }

  addtodo() {
    if (this.todo) {
      let newtodo = {
        title: this.todo,
        done: false
      }

      this.http.post(this.apiUrl, newtodo).subscribe(src=>{
        let data = src.json();
        this.todos = [...this.todos];
        this.todos.push(data);
        this.todo = '';
      })
    }
  }

  doClertodos() {
    this.todos = this.todos.filter(todo=>{
      return !todo.done;
    });

    this.todos.forEach(todo=> {
      this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe();
    })
  }

  filterType;
  doChangeFilterType(val) {
    this.filterType = val;
  }

  toggleAll: boolean = false;
  doToggleAll(val) {
    this.todos.forEach(todo=>{
      todo.done = val;
      this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe();
    });
  }

  updateToggleAllState() {
    this.toggleAll = this.todos.filter(item=>{
      return !item.done;
    }).length === 0;
  }

  removeTodo(todo) {
    this.http.delete(`${this.apiUrl}/${todo.id}`).subscribe(res => {
      this.todos = this.todos.filter(item => {
         return item.id != todo.id;
      });
    });
  }

  updateTodo(todo) {
    this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe();
    this.updateToggleAllState();
  }
}
