import { fromEvent } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec posuere purus. Nunc bibendum sem ac nisi eleifend lacinia. Mauris posuere eleifend neque, et faucibus risus fringilla eu. Vestibulum pulvinar semper aliquam. Sed nisl mi, imperdiet sed orci id, molestie consequat nibh. Curabitur sed elit dui. Mauris laoreet sagittis leo, ut bibendum tortor rutrum eget.
<br><br>
Sed porta nibh eu vehicula mattis. Vivamus neque mauris, placerat luctus elit a, mollis placerat est. Phasellus lorem lectus, viverra nec iaculis sed, cursus quis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed metus eget ipsum placerat gravida vel a nulla. Morbi sed cursus enim. Aenean placerat feugiat eros, id molestie ex aliquet a. Fusce at orci sed enim consequat efficitur. Donec id aliquam diam, aliquam finibus orci. Suspendisse et posuere mi, at pretium ex. Morbi scelerisque ex in nunc luctus, et elementum nulla scelerisque. Mauris sit amet erat quis velit placerat molestie a sit amet dolor.
<br><br>
Praesent sodales sodales lacus, eu consequat urna varius a. In faucibus non urna vel consequat. Praesent tempus, sapien ac volutpat maximus, dolor quam tincidunt risus, sed ullamcorper urna ante at turpis. Nulla porttitor erat a rhoncus porta. Nullam non imperdiet mauris. Aliquam aliquet lobortis lorem, sit amet porta massa efficitur et. Nullam at mollis purus. Etiam semper non nulla vel imperdiet.
<br><br>
Sed a justo non tortor cursus tristique. In eu tempus sem. Aenean id quam sit amet eros sagittis laoreet. In vel massa libero. Sed sit amet lectus at orci euismod semper. Sed pharetra augue non quam auctor faucibus. Etiam ut faucibus urna. Aenean hendrerit, nisi nec condimentum aliquam, nulla diam tempus elit, in congue massa ligula fermentum tellus. Aliquam malesuada velit ut urna tempus tempor.
<br><br>
Sed at mi non justo blandit rutrum in non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam diam felis, semper quis lectus non, accumsan consequat lorem. Phasellus non metus purus. Quisque vestibulum scelerisque elit, eget laoreet odio fringilla a. Donec sed finibus ligula, eget eleifend arcu. Aenean nunc quam, pretium quis felis sed, pharetra faucibus justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec posuere purus. Nunc bibendum sem ac nisi eleifend lacinia. Mauris posuere eleifend neque, et faucibus risus fringilla eu. Vestibulum pulvinar semper aliquam. Sed nisl mi, imperdiet sed orci id, molestie consequat nibh. Curabitur sed elit dui. Mauris laoreet sagittis leo, ut bibendum tortor rutrum eget.
<br><br>
Sed porta nibh eu vehicula mattis. Vivamus neque mauris, placerat luctus elit a, mollis placerat est. Phasellus lorem lectus, viverra nec iaculis sed, cursus quis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed metus eget ipsum placerat gravida vel a nulla. Morbi sed cursus enim. Aenean placerat feugiat eros, id molestie ex aliquet a. Fusce at orci sed enim consequat efficitur. Donec id aliquam diam, aliquam finibus orci. Suspendisse et posuere mi, at pretium ex. Morbi scelerisque ex in nunc luctus, et elementum nulla scelerisque. Mauris sit amet erat quis velit placerat molestie a sit amet dolor.
<br><br>
Praesent sodales sodales lacus, eu consequat urna varius a. In faucibus non urna vel consequat. Praesent tempus, sapien ac volutpat maximus, dolor quam tincidunt risus, sed ullamcorper urna ante at turpis. Nulla porttitor erat a rhoncus porta. Nullam non imperdiet mauris. Aliquam aliquet lobortis lorem, sit amet porta massa efficitur et. Nullam at mollis purus. Etiam semper non nulla vel imperdiet.
<br><br>
Sed a justo non tortor cursus tristique. In eu tempus sem. Aenean id quam sit amet eros sagittis laoreet. In vel massa libero. Sed sit amet lectus at orci euismod semper. Sed pharetra augue non quam auctor faucibus. Etiam ut faucibus urna. Aenean hendrerit, nisi nec condimentum aliquam, nulla diam tempus elit, in congue massa ligula fermentum tellus. Aliquam malesuada velit ut urna tempus tempor.
<br><br>
Sed at mi non justo blandit rutrum in non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam diam felis, semper quis lectus non, accumsan consequat lorem. Phasellus non metus purus. Quisque vestibulum scelerisque elit, eget laoreet odio fringilla a. Donec sed finibus ligula, eget eleifend arcu. Aenean nunc quam, pretium quis felis sed, pharetra faucibus justo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec posuere purus. Nunc bibendum sem ac nisi eleifend lacinia. Mauris posuere eleifend neque, et faucibus risus fringilla eu. Vestibulum pulvinar semper aliquam. Sed nisl mi, imperdiet sed orci id, molestie consequat nibh. Curabitur sed elit dui. Mauris laoreet sagittis leo, ut bibendum tortor rutrum eget.
<br><br>
Sed porta nibh eu vehicula mattis. Vivamus neque mauris, placerat luctus elit a, mollis placerat est. Phasellus lorem lectus, viverra nec iaculis sed, cursus quis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed metus eget ipsum placerat gravida vel a nulla. Morbi sed cursus enim. Aenean placerat feugiat eros, id molestie ex aliquet a. Fusce at orci sed enim consequat efficitur. Donec id aliquam diam, aliquam finibus orci. Suspendisse et posuere mi, at pretium ex. Morbi scelerisque ex in nunc luctus, et elementum nulla scelerisque. Mauris sit amet erat quis velit placerat molestie a sit amet dolor.
<br><br>
Praesent sodales sodales lacus, eu consequat urna varius a. In faucibus non urna vel consequat. Praesent tempus, sapien ac volutpat maximus, dolor quam tincidunt risus, sed ullamcorper urna ante at turpis. Nulla porttitor erat a rhoncus porta. Nullam non imperdiet mauris. Aliquam aliquet lobortis lorem, sit amet porta massa efficitur et. Nullam at mollis purus. Etiam semper non nulla vel imperdiet.
<br><br>
Sed a justo non tortor cursus tristique. In eu tempus sem. Aenean id quam sit amet eros sagittis laoreet. In vel massa libero. Sed sit amet lectus at orci euismod semper. Sed pharetra augue non quam auctor faucibus. Etiam ut faucibus urna. Aenean hendrerit, nisi nec condimentum aliquam, nulla diam tempus elit, in congue massa ligula fermentum tellus. Aliquam malesuada velit ut urna tempus tempor.
<br><br>
Sed at mi non justo blandit rutrum in non sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam diam felis, semper quis lectus non, accumsan consequat lorem. Phasellus non metus purus. Quisque vestibulum scelerisque elit, eget laoreet odio fringilla a. Donec sed finibus ligula, eget eleifend arcu. Aenean nunc quam, pretium quis felis sed, pharetra faucibus justo.
`;

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

const body = document.querySelector('body');

body.appendChild( texto );
body.appendChild(progressBar)

// funcion que haga el calculo
const calcularPorcentajeScrol = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement
    
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100

};

// streams
const scroll$ = fromEvent<Event>( document, 'scroll' );

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScrol ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})