# Local Storage y Sesion Storage 

Nos permite tener datos persistentes. No debemos instalar nada ya que local storage  y sesion storage son características del browser. Esto solo funciona cuando la aplicacion se va ha ejecutar en el navegador en la web. En caso de node JS debemos usar Filesystem, BD y otras

**NOTA IMPORTANTE**: No se debe almacenar datos sensibles debido a que estos son visibles por el usuario

**NOTA IMPORTANTE**: Vamos a poder tener un localStorage y Session Storage por cada dominio

- Session Storage: Permite almacenar archivos, pero al reiniciar el navegador o la tarea estos se borraran.

- Local Storage: Permite almacenar datos sin fecha de expiración


**BP**: Usualmente el local storage es más que suficiente

--index.js--

```
localStorage.setItem( 'mi-key', 'ABC123');

sessionStorage.setItem( 'mi-key-dos', 'ABC789');
// Podemos eliminar datos del Sesion Storage y Local Storage de la misma forma la siguiente manera : 

// - Cadenas vacias
// localStorage.setItem( 'mi-key', '');


// - setTimeOut()
/* setTimeout( () => {
    localStorage.setItem( 'mi-key', 'ABC456');
}, 1500); */
```

## Como usar en proyectos reales

Agregamos una nueva clase en el todo-list.class.js:

```
guardarLocalStorage(){
    localStorage.setItem('todo', this.todos);
}
```

**Nota Importante**: Este método debe ser llamado en cada método donde se modifique en este caso el this.todos

**Nota Importante**: Cuando vemos en Application del browser [object, Object] es porque está es la representación de un objeto como string y no vamos a poder recuperar la estructura original, porque literalmente lo va ha tomar como una cadena

**NOTA IMPORTANTE**: Ya que localStorage trabaja con strings, podemos transformar nuestro objeto como .json y después pasarlo a string. Para eso usamos:

```
guardarLocalStorage(){
    localStorage.setItem('todo', JSON.stringify( this.todos ) );
}
```

Ahora si podemos ver la información en el localStorage, pero aunque el browser permitirá que manipule como un objeto en realidad no es así.

- El siguiente paso es cargar la información desde localStorage:

**Nota Importante**: Antes de recuperar alguna propiedad de localStorage se debe verificar que existe la misma

```
cargarLocalStorage(){
    if( localStorage.getItem('todo')){
        
    }
}
```





