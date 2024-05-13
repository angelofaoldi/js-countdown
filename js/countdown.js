'use strict';

// CREO IL TEMPO DEL COUNTDOWN
let tempo = 10;

// CREO IL COUNTDOWN
// IMPOSTO UN INTERVALLO CON UNA FUNZIONE CON STRUTTURA IF ELSE

let countdown = setInterval(function() {
    if (tempo <= 0) {
        clearInterval(countdown);
        console.log(alert("Buon Anno!"));
    } else {
        alert("Il countdown inizierà tra " + tempo + " secondi");
    }
    countdown -= 1;
}, 1000);

console.log(tempo);
console.log(countdown);

