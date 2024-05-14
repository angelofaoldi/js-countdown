'use strict';

// CREO IL TEMPO DEL COUNTDOWN
// let tempo = 10;

// CREO IL COUNTDOWN
// IMPOSTO UN INTERVALLO CON UNA FUNZIONE CON STRUTTURA IF ELSE

// let countdown = setInterval(function() {
//     if (tempo <= 0) 

//         { clearInterval(countdown); console.log(alert("Buon Anno!"));} 
    



//     else {alert("Il countdown inizierà tra " + tempo + " secondi");}

//     countdown -= 1;
// }, 1000);

// console.log(tempo);
// console.log(countdown);



/* SECONDO APPROCCIO */

let tempo = 10;

// creo un intervallo
// creo una funzione anonima nel setInterval
// cosa fa la funzione? stampa ogni intervallo di tempo
// per fare il conto alla rovescia, inserisco la variabile tempo--;

// creo struttura if{} per stampare "Buon Anno" al termine del countdown
// con clearInterval fermo il countdown per non andare nei numeri negativi

const orologio = setInterval(function() {console.log(tempo); tempo--;

if(tempo === 0){console.log("Buon Anno"); clearInterval(orologio);}}, 1000);

// il console.log("Buon Anno") può essere sostituito con un alert("Buon Anno")

/* inserire il setInterval in una const orologio: 
in questo modo potrà essere richiamata nel clearInterval
e terminare il countdown */