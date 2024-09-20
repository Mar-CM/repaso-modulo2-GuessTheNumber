'use strict';

const button = document.querySelector('.js-button');
const numberInput = document.querySelector('.js-number');
const message = document.querySelector('.js-text');
const counter = document.querySelector('.js-attempts');
const buttonReset = document.querySelector('.js-reset');


// Funcion para crear el número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Número aleatorio creado. Como tmb lo vamos a usar en el botón de reset, y en ese momento lo vamos a reasignar el número, la variable tendrá que ser let en vez de const
let randomNumber = getRandomNumber(100);
console.log(randomNumber)


//Funcion manejadora, incluye el condicional para 

function handleClick(){

    const number = parseInt(numberInput.value);
    console.log(number);

    if (number > 100 || number < 1 || isNaN(number)){ // esta primera linea viene a decir que si el número es mayor a 100, menos a 0 o no lo hemos rellenado con un número, nos salga la siguiente frase
        message.innerHTML = `Pista: El número debe estar
        entre 1 y 100.`;
    } else if (randomNumber === number){
        message.innerHTML = `¡¡¡Has ganado campeona!!!`;

    } else if (randomNumber < number){
        message.innerHTML = `Pista: Demasiado alto.`;

    } else {
        message.innerHTML = `Pista: Demasiado bajo.`;
    }

    handleCount(); //Llamamos la variable dentro de la función del click del botón para que nos comience a contar
}


// Lo más complicado ha sido hace el contador de clicks cuando pulsamos el botón. Para ello hemos hecho los siguientes pasos:
// Hemos hecho una función  del contador del click.
// Al ir sumando, tenemos que hacer una variable reasignable, que al entrar en la página sea 0 y en cuanto pulsamos el click ir sumando los intentos.

let clickCount = 0; // variable reasignable

function handleCount() { //función para contar click del botón
    clickCount++;    
    counter.innerHTML = `Número de intentos: ${clickCount}`
}


// La tercera parte, es crear un botón de reset, para que nos de un nuevo número aleatorio sin tener que resfrescar la página.
// Hacemos una función flecha para practicar

const handleReset = () => {
    clickCount = 0; //ponemos el click a 0
    randomNumber = getRandomNumber(100); // volvemos a generar otro nº aleaotrio
    numberInput.value = ""; //vaciamos el hueco del número
    message.innerHTML = `Pista: Escribe el número y dale a Prueba`; // volvemos a poner los mensajes al original
    counter.innerHTML = `Número de intentos: ${clickCount}` // volvemos a poner los mensajes a 0
    console.log('número aleatorio', randomNumber)
}

// Llamada a ambas funciones manejadoras
button.addEventListener('click', handleClick);
buttonReset.addEventListener('click', handleReset);