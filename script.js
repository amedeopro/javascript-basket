// Basket
// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere
// maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per da 3 punti
// Una volta generato il “database”, il programma deve chiedere
// all’utente di inserire un Codice Giocatore e il programma
// restituisce le statistiche.


// creo una funzione che genera numeri random

function numeroRandom(min, max){

  var numero = Math.floor(Math.random()*(max-min+1)+min);

  return numero;

}


var lettereMaiuscole = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var codice = "";


for (var i = 0; i < 3; i++) {
  codice += lettereMaiuscole.charAt(Math.floor(Math.random() * lettereMaiuscole.length));
}

for (var i = 0; i < 3; i++){
  codice += numeroRandom(1,9);
}

console.log(codice)
