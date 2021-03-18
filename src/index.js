import './styles.css';
import { Todo, TodoList } from  './classes';

const todos = [];

const todoList = new TodoList();
console.log( todoList );

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo( tarea );

console.log( todoList );