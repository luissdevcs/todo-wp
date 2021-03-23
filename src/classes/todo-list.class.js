

export class TodoList {


    constructor(){

        // Es común trabajarlo con arreglos, pero se puede utilizar también objetos
        this.todos = [];

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo ( id ){
        
        // this.todos.pop( id );
        this.todos = this.todos.filter( todo => todo.id != id);
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