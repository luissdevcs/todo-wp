import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias en el Html
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');

export  const crearTodoHtml = ( todo ) => {

    const htmlTodo = `<li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
                            <div class="view">
                                <input class="toggle" type="checkbox" ${ ( todo.completado ) ? 'checked': ''} >
                                <label>${ todo.tarea }</label>
                                <button class="destroy"></button>
                            </div>
                            <input class="edit" value="Create a TodoMVC template">
                      </li>`;
    
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // Inserta el primer hijo, por lo que no usa el div sino el li como lo necesitamos
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

// Eventos

// Me devueve la tecla
txtInput.addEventListener('keyup',( event ) => {


    if ( event.keyCode === 13 && txtInput.value.length > 0){


        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo( nuevoTodo );

        console.log( todoList );
        crearTodoHtml( nuevoTodo );
        txtInput.value = '';

    }
});

// Agregar o quitar atributo "checked" en cada item de la todo list

divTodoList.addEventListener( 'click', ( event ) => {
    console.log('click');
    // Para ver cual elemento en cliqueado
    // console.log( event.target.localName);
    
    const nombreElemento = event.target.localName; // input, label y button

    // Hacemos referencia también al elemento contenedor. En este caso el elemento contendor es el "li", por lo que ocupamos llamar al método "parentElement" dos veces. Esto nos permite acceder al "data-id" que necesitamos para identificar items únicos
    const todoElemento   = event.target.parentElement.parentElement;

    console.log( nombreElemento );
    console.log( todoElemento );
    
    const todoId = todoElemento.getAttribute('data-id');
    console.log( todoId );

    if ( nombreElemento.includes( 'input' )){
        todoList.marcarCompletado( todoId );

        // Dado que el elemento se inicializa en false por defecto, podemos indicar que varie la clase, añadiendo "completed".
        todoElemento.classList.toggle('completed');
    }

    console.log( todoList );

});

// Eliminar todo

divTodoList.addEventListener( 'click', ( event ) => {
    console.log('click');
    // Para ver cual elemento en cliqueado
    // console.log( event.target.localName);
    
    const nombreElemento = event.target.localName; // input, label y button

    // Hacemos referencia también al elemento contenedor. En este caso el elemento contendor es el "li", por lo que ocupamos llamar al método "parentElement" dos veces. Esto nos permite acceder al "data-id" que necesitamos para identificar items únicos
    const todoElemento   = event.target.parentElement.parentElement;

    console.log( nombreElemento );
    console.log( todoElemento );
    
    const todoId = todoElemento.getAttribute('data-id');
    console.log( todoId );

    if ( nombreElemento.includes( 'button' )){
        todoList.eliminarTodo( todoId );

        
        
    }

    console.log( todoList );

});