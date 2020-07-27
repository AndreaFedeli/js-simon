//Un alert espone 5 numeri casuali.
//Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
//Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
//quali dei numeri da indovinare sono stati individuati.


//creo array di numeri del pc senza doppioni
var numeriPc = [];

for (var i = 0; i < 5; i++){
    var numeroPc = generaNumeri(1,99);
    if (numeroPc != numeriPc[i]){
        numeriPc.push(numeroPc);
    }
}

console.log(numeriPc);

//con un alert mostro i numeri casuali
alert('Memorizza per 30 secondi questi numeri e poi premi ok ' + numeriPc);

//creo timer che parte alla chiusura dell alert

var numeriUtente = [];

setTimeout(function(){
    for (var i = 0; i < 5; i++){
        var numeroUtente = prompt('Inserisci un numero e controlla se coincide con quelli del pc');
        b = 0;
        while(b < 5){
            if (numeroUtente == numeriPc[b]){
                numeriUtente.push(numeroUtente);
            }
            b++;
        }
    }


    //scelti i numeri stampo i rispettivi array ed il risultato della sfida
  console.log('I numeri scelti dal computer sono' + numeriPc) ;
    console.log('Hai indovinato ' + numeriUtente.length + ' numeri:' + numeriUtente) ;
}, 1000);
console.log(numeriUtente);



// funzione per generare numeri casuali

function generaNumeri(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
