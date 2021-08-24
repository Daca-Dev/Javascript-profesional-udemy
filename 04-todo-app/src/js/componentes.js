

import { Todo } from "../classes";

import { todoList } from "..";


// referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const clearBtn = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {
    // funcion que nos permita crear un TODO en el HTMl

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // creacion del elemento HTML
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // agrego solamente el primer hijo del DIV porque es mala
    // práctica tener div's directamente dentro de un UL
    divTodoList.append( div.firstElementChild );

    return div;
}

// Eventos
txtInput.addEventListener( 'keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );
        crearTodoHtml( nuevoTodo );
        txtInput.value = ''
    }
});

divTodoList.addEventListener( 'click', ( event ) => {
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if ( nombreElemento.includes('input') ) { // marcar/desmarcar completado
        todoList.toggleEstado( todoId );
        todoElemento.classList.toggle('completed')
    } else if ( nombreElemento.includes('button') ) { // eliminar todo
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }
});

clearBtn.addEventListener( 'click', ( ) => {

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        
        if ( elemento.classList.contains('completed') ) {
            divTodoList.removeChild( elemento );
        }
    }
});

ulFilters.addEventListener('click', ( event ) => {
    const filtro = event.target.text;

    if ( !filtro ) { return };

    anchorFiltros.forEach(element => {
        element.classList.remove('selected');
    });
    
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children ) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        console.log(filtro);
        switch( filtro ) {
            case 'Pendientes':
                if ( completado ) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if ( !completado ) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});