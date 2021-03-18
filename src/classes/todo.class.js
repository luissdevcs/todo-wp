export class Todo {
    constructor( tarea ){

        this.tarea       = tarea;
        this.id          = new Date().getTime();  // Representación de horas minutos y segundos
        this.completado  = false;
        this.creado      = new Date();
    }
}