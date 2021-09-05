import { obtenerChiste } from "./http-provider";

const body = document.querySelector('#container');
let btn, orderList;

const crearChisteHtml = () => {
  const html = ` <h1>Chistes</h1>
  <hr />
  <button class="btn btn-primary">Otro chiste</button>
  <ol class="mt-2 list-group">
  </ol>`;

  const divChiste = document.createElement('div');
  divChiste.innerHTML = html;

  body.appendChild( divChiste );
  
};

const eventos = () => {

  orderList = document.querySelector('ol');
  btn = document.querySelector('button');

  btn.addEventListener( 'click', async() => {
  
    btn.disabled = true;
    dibujarChiste( await obtenerChiste() );
    btn.disabled = false;
  
  });

};

// Chiste { ids, value }
const dibujarChiste = ( chiste ) => {
  
  const olItem =  document.createElement('li');
  olItem.innerHTML = `<b>${chiste.id}:</b> ${chiste.value}`;
  olItem.classList.add('list-group-item');

  orderList.appendChild(olItem);

};

const init = () => {
  crearChisteHtml();
  eventos();
}

export {
  init
}
