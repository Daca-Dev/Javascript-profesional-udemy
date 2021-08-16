import { Todo } from ".";

export class TodoList {

    static fromJson( {id, tarea, completado, creado} ) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.creado = creado;
        tempTodo.completado = completado;

        return tempTodo;
    }

    constructor() {
        this.cargarLocalstorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalstorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id !== parseInt(id) );
        this.guardarLocalstorage();
    }

    toggleEstado( id ) {
        for (const todo of this.todos) {
            if ( todo.id === parseInt(id) ) {
                todo.completado = !todo.completado;
                break;
            }
        }
        this.guardarLocalstorage();
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalstorage();
    }

    guardarLocalstorage() {
        localStorage.setItem('data', JSON.stringify(this.todos));
    }

    cargarLocalstorage() {
        const data = JSON.parse( localStorage.getItem('data') );

        if ( data !== null ) {
            this.todos = data;
        } else {
            this.todos = [];
        }

        this.todos = this.todos.map( obj => TodoList.fromJson( obj ) );
    }
}