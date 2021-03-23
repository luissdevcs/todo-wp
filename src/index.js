import './styles.css';
import { Todo, TodoList } from  './classes';
import { crearTodoHtml } from './js/componentes';

const todos = [];

export const todoList = new TodoList();
// console.log( todoList );

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHtml( tarea );


// Marcar todo como completado

// todoList.marcarCompletado( tarea.id );

// Eliminar todo

// todoList.eliminarTodo( tarea.id);
console.log( todoList );

