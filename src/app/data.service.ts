import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: Http) {

  }

  addTodo(): Observable<any[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json());
  }

  postTodo(todo): Observable<any[]> {
    return this.http.post(this.apiUrl, todo)
    .map(res=> res.json());
  }

  putTodo(todo) :Observable<any[]> {
    return this.http.put(`${this.apiUrl}/${todo.id}`, todo)
    .map(res=>res.json());
  }

  deleteTodo(todo): Observable<any[]> {
    return this.http.delete(`${this.apiUrl}/${todo.id}`)
    .map(res => res.json());
  }
}
