
export class Todo {

    constructor( tarea ) {

        this.tarea = tarea;

        this.id = new Date().getTime(); //132498713
        this.completado = false;
        this.creado = new Date();
    }
}