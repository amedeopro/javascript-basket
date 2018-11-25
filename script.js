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

//genero il codice del giocatore
function generaCodice(){
  var lettereMaiuscole = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var codice = "";


  for (var i = 0; i < 3; i++) {
    codice += lettereMaiuscole.charAt(Math.floor(Math.random() * lettereMaiuscole.length));
  }

  for (var i = 0; i < 3; i++){
    codice += numeroRandom(1,9);
  }

  return codice;
}



//creo un array con all'interno un oggetto per creare i giocatori

var giocatori =
  {
    codiceGiocatore: '',
    puntiFatti: 0,
    rimbalzi: 0,
    falli: 0
  };

var arrayGiocatori = [];

  for (var i = 0; i < 100; i++) {

      giocatori.codiceGiocatore = generaCodice();
      giocatori.puntiFatti = numeroRandom(1,50);
      giocatori.rimbalzi = numeroRandom(1,20);
      giocatori.falli = numeroRandom(1,4);



    arrayGiocatori.push(giocatori);

  }

console.log(arrayGiocatori);

// var richiestaUtente = prompt('inserisci un codice giocatore');
// var stampaGiocatore = false;
//
// for (var i = 0; i < arrayGiocatori.length; i++) {
//   if (richiestaUtente.includes(arrayGiocatori[i])) {
//     document.writeln(arrayGiocatori[i]);
//   } else {
//     document.writeln('questo giocatore non è nel database');
//   }
// }
