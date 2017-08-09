import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo = '';

  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    this.dataSvc.addTodo()
    .subscribe(src=> {
      this.todos = src;
    });
  }

  addtodo() {
    if (this.todo) {
      let newtodo = {
        title: this.todo,
        done: false
      }

      this.dataSvc.postTodo(newtodo).subscribe(src=>{
        let data = src;
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
      this.dataSvc.putTodo(todo).subscribe();
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
      this.dataSvc.putTodo(todo).subscribe();
    });
  }

  updateToggleAllState() {
    this.toggleAll = this.todos.filter(item=>{
      return !item.done;
    }).length === 0;
  }

  removeTodo(todo) {
    this.dataSvc.deleteTodo(todo).subscribe(res => {
      this.todos = this.todos.filter(item => {
         return item.id != todo.id;
      });
    });
  }

  updateTodo(todo) {
    this.dataSvc.putTodo(todo).subscribe();
    this.updateToggleAllState();
  }
}
