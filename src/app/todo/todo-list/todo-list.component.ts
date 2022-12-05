import { Component } from '@angular/core';
import { Todo } from '../todos'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})


export class TodoListComponent {
  todos: Todo[] = [
    {id: 1, title: 'todo1', isChecked: false, edit: false},
    {id: 2, title: 'todo2', isChecked: false, edit: false},
    {id: 3, title: 'todo3', isChecked: true, edit: false},
  ];

  constructor () {}

  // 画面表示切り替え
  toggleCheckTodo(todo: Todo) {
    todo.isChecked = !todo.isChecked
    console.log(this.todos)
  }

  // 削除機能
  deleteTodo(todo: Todo) {
    let idx: number = -1
    for(let i: number = 0; i < this.todos.length; i++){
      if (todo.id == i + 1){
        idx = i;
      }
    }
    this.todos.splice(idx, 1)
  }

  // 作成機能
  createTodo(newTodo: Todo) {
    this.todos = [...this.todos, newTodo]
  }

  // 編集機能
  updateTodo(title: string, todo: Todo) {
    todo.title = title
  }

  // バリデーション
  checkValidation(title: string, todo?: Todo): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: title,
      isChecked: false,
      edit: false
    }
    const s = this.todos.filter(todo => {
      return todo.title != title
    })
    if(title.trim() == ""){
      alert("入力してください")
    } else if(todo == undefined){
      if(this.todos.length != s.length){
        alert("重複しています")
      } else {this.createTodo(newTodo)}
    } else {
      if(title == todo.title || s.length != this.todos.length){
        alert("重複しています")
      } else {this.updateTodo(title, todo)}
    }
  }

  // 編集画面の切り替え
  toggleUpdate(todo: Todo) {
    this.todos.map(todo => {
      return todo.edit = false
    })
    todo.edit = !todo.edit
  }

  // チェック済みのリストの削除
  pergeTodo() {
    this.todos = this.todos.filter(todo => {
      return todo.isChecked == false
    })
  }
}
