import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludo = (nombre) => {
    const h2 = document.createElement('h2');
    h2.innerText = `Hola buen día ${nombre}`;
    console.log('Desde el componente');
    document.body.append(h2);

    // Image
    const img = document.createElement('img')
    img.src = webpacklogo;
    document.body.append(img);

}