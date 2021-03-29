

export class TodoList {


    constructor(){

        // Es común trabajarlo con arreglos, pero se puede utilizar también objetos
        // this.todos = [];
        this.cargarLocalStorage();
        console.log( this.todos );

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo ( id ){
        
        // this.todos.pop( id );
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        const idNumber = id*1;
        for ( const todo of this.todos){
            if ( todo.id === idNumber ){
                todo.completado = !todo.completado;
                console.log( todo.completado );
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        console.log( this.todos );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ) );
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') ) 
            ? this.todos = JSON.parse(localStorage.getItem('todo')) 
            : this.todos = [];

        /* if( localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('Esta cargando el localStorage');
            console.log( typeof this.todos );

        }else{// Se debe manejar dado que el usuario halla borado desde las configuración el localStorage. O puede ser que no teniamos nada grabado en localStorage
            this.todos = [];
        } */
    }

}