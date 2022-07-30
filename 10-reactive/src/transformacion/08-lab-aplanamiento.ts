import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


// creadno un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const pass = document.createElement('input');
const submitBtn = document.createElement('button');

// auxiliar
const peticionHttpLogin = (userPass) =>
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( err => of(err))
        )


// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';

pass.type = 'password';
pass.placeholder = 'password';
pass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, pass, submitBtn);

document.body.appendChild(form);

// streams
const submitForm$ = fromEvent<Event>(form, 'submit')
                        .pipe(
                            tap(event => event.preventDefault()),
                            map(event => ({
                                email: event.target[0].value,
                                password: event.target[1].value
                            })),
                            // mergeMap( peticionHttpLogin ),
                            // switchMap( peticionHttpLogin )
                            exhaustMap( peticionHttpLogin )
                        );
submitForm$.subscribe( token => {
    console.log(token);
})