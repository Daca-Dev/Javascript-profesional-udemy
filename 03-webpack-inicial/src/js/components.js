import '../css/components.css';

export const saludo = (nombre) => {
    const h2 = document.createElement('h2');
    h2.innerText = `Hola buen día ${nombre}`;
    console.log('Desde el componente');
    document.body.append(h2);
}