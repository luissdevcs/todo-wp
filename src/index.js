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

// localStorage.setItem( 'mi-key', 'ABC123');

// sessionStorage.setItem( 'mi-key-dos', 'ABC789');
// Podemos eliminar datos del Sesion Storage y Local Storage de la misma forma la siguiente manera : 

// - Cadenas vacias
// localStorage.setItem( 'mi-key', '');


// - setTimeOut()
/* setTimeout( () => {
    localStorage.setItem( 'mi-key', 'ABC456');
}, 1500); */

// todoList.todos.forEach( todo => crearTodoHtml ( todo ));
// Minimizada esta expresión indica, que el primer elemento que regresa el forEach es el que se le pasa como argumento al crearTodoHtml. Solo funciona si le pasa un argumento.
todoList.todos.forEach( crearTodoHtml());