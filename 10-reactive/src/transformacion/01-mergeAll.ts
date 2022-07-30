import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';

// referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        console.log(usuario);
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.appendChild( img );
        li.appendChild( anchor );

        orderList.appendChild( li )
    }
}

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent>( 'target', 'value' ),
    map<any, Observable<any>>( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    mergeAll(),
    pluck('items')
).subscribe( mostrarUsuarios );

