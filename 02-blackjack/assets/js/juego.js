/**
 * 2C = two of clubs
 * 2D = two of diaminds
 * 2H = two of hearts
 * 2S = two of spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;


// referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const htmlPuntosJugador = document.querySelectorAll('strong');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputador = document.querySelector('#computador-cartas');

const crearDeck = () => {
    /** esta función crea una nueva baraja aleatoria */
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);;
}

const pedirCarta = () => {
    /** devuelve una carta del deck y la quita del mismo */
    if (deck.length === 0) {
        // levanta un error en consola y detiene el código
        throw 'no hay cartas en el Deck'
    }
    const carta = deck.pop();
    return carta;
}

const valorCarta = ( carta ) => {
    /** devuelve el valor de una carta segun las reglas de Blackjack (21una) */
    const valor = carta.substring(0,carta.length - 1);
    
    return (!isNaN(valor)) ? valor * 1 :
            (valor === 'A') ? 11 : 10;
}

const crearCarta = (carta, divCartas) => {

    const cartaHTML = document.createElement('img');

    cartaHTML.src = `assets/images/${carta}.png`;
    cartaHTML.classList.add('carta');
    divCartas.append(cartaHTML);

}

const juegoComputadora = (puntajeRival) => {
    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        htmlPuntosJugador[1].innerText = puntosComputadora;

        crearCarta(carta, divCartasComputador);

        if ( puntajeRival > 21) {
            break;
        }
    } while ((puntosComputadora < puntajeRival) && (puntosComputadora <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntajeRival) {
            alert('Nadie gana :(');
        } else if ( puntajeRival > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21) {
            alert('Jugador Gana');
        }
    }, 500);
}

deck = crearDeck();
console.log(deck);

// eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);

    crearCarta(carta, divCartasJugador);
    htmlPuntosJugador[0].innerText = puntosJugador;

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        juegoComputadora(puntosJugador);
    } else if ( puntosJugador === 21 ) {
        btnDetener.disabled = true;
        console.warn('21, genial!')
        juegoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    juegoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    deck = crearDeck();
    puntosComputadora = puntosJugador = 0;

    for (let i in htmlPuntosJugador) {
        htmlPuntosJugador[0].innerText = 0;
    }

    divCartasComputador.innerHTML = '';
    divCartasJugador.innerHTML = '';
});