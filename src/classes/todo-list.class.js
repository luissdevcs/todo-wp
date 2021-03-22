

export class TodoList {


    constructor(){

        // Es común trabajarlo con arreglos, pero se puede utilizar también objetos
        this.todos = [];

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo ( id ){
        // console.log('Estoy eliminando el todo');
        this.todos.pop ( id );
        // console.log( `${ id } eliminado`);
    }

    marcarCompletado( id ){
        const idNumber = id*1;
        for ( const todo of this.todos){
            if ( todo.id === idNumber ){
                todo.completado = !todo.completado;
                console.log( todo.completado );
                break;
            }
        }
    }

    eliminarCompletado(){
        
    }



}