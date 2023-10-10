const img = document.getElementById( 'img' );
const button = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const traffcLight = ( event ) => {
    stopAutomatic ();
    turnOn [event.target.id] ();
} 

const nextIndex = () => COLORiNDEX = COLORiNDEX < 2 ? ++colorIndex : 0;

const changecolor = () => {
    const colors = ['red', 'yellow', 'green',]
    const color = colors [ colorIndex ];
    tuenOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval( intervalId );
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changecolor, 1000)
}

cuttons.addEventListener('click', trafficLight );