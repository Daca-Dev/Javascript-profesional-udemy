// Importamos el archivo de estilos
import './styles.css';
// Archivos JS
import { TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );