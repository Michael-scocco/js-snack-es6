// js-snack-es6

/*
Snack 1:
Creare un array di oggetti,
ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando
 destructuring e template literal
*/

// creare un oggetto di array, che descrive una bici con due proprietà
// nome e peso.

// step 4, stampare a video il peso più leggero

// Creare un array di oggetti,
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e
// peso.

// step 1, creare lista bici
const ListaBici = [
    {
        nome : 'bianchi',
        peso : 8
    },
    {
        nome : 'Trek',
        peso : 5
    },
    {
        nome : 'scott',
        peso : 10
    },
    {
        nome : 'merida',
        peso : 15
    },
    {
        nome : 'cannondale',
        peso : 18
    }
];

// step 2, richiamare l'intero l'oggetto(nome e peso) ed strapolare il peso dall'oggetto dell'array,
//         ed inserirlo in una variabile, la quale memorizza il valore più basso ad ogni iterazione

let biciLeggera = ListaBici[0];//qui prendo l'intero OGGETTO(nome e peso), il primo di questo array,
    // la quale salvera ad ogni iterazione la l'oggetto più leggero(nome e peso)

// step 3, ciclare ogni singolo peso, e confrontarlo con la variabile creata prima
for (var i = 0; i < ListaBici.length; i++) {
    var singolaBici = ListaBici[i];
    // console.log(singolaBici.peso);
    var pesoSingolaBici = singolaBici.peso;

// quindi devo confrontare il peso della singola bici, con il il peso di ogni bici(oggetto)
// se, la singolaBici.peso meno della bici(oggetto, solo peso), allora la biciLeggera è uguale alla singolaBici

    if (pesoSingolaBici < biciLeggera.peso) {
        biciLeggera = singolaBici;//prendo l'oggetto e vedo se è uguale a singola bici(che anke lei è un (oggetto)
        // console.log(biciLeggera, singolaBici);
    }
    /*
    imparare a fare la condizione con i log
    console.log(biciLeggera.nome + ' pesa ' + biciLeggera.peso);
    console.log(singolaBici.nome + ' pesa ' + singolaBici.peso);
    console.log(biciLeggera.nome + ' pesa di meno');
    console.log('');
    */
}

// Stampare a schermo la bici con peso minore utilizzando
//  destructuring e template literal
var bici = document.getElementById('bici-leggera');
var stampaHtml = `
<section>
    <h1>
        la bici più leggera è ${biciLeggera.nome} <br>
         con il peso di ${biciLeggera.peso}kg
    </h1>
</section>
`
bici.insertAdjacentHTML(`beforeend`, stampaHtml);




/*
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
solo nomi e falli subiti e stampiamo tutto in console.
*/


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


const Squadre = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    }
];


// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

function randomNumeri(min, max) {
    return Math.floor(Math.random() * max - min +1) + min
}
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
// solo nomi e falli subiti e stampiamo tutto in console.

const listaFalli = [];

var listaEl = document.getElementById('lista-squadre');


for (var i = 0; i < Squadre.length; i++) {

    var singolaSquadra = Squadre[i];//ciclo tutte le squadre

    // voglio assegnare numeri casuali solo alla proprietà falle e punti
    // quindi con dot notation vado a prendermi la mia singola squadra ed estrapolo solo
    // falli e punti
    singolaSquadra.falli = randomNumeri(0, 100);
    singolaSquadra.punti = randomNumeri(0, 100);
    // li riassegno singolaSquadra.falli con una nuova variabile
    let falliSubiti = singolaSquadra.falli;
    // e faccio la stessa cosa ma per i nomi delle squadre
    let nomeSquadra = singolaSquadra.nome;

    // vado a puschiare falli e nomi nel nuovo array, ma devo puschiare degli
    // oggetti, non solo proprietà
    listaFalli.push({nomeSquadra, falliSubiti});//con le graffe all'interno puschio una intera proprietà
    // console.log(listaFalli);

    // voglio stampare lista squadre in html con il backtips
    var stampaLista = `
    <section>
        <p>
            questa è la squadra ${nomeSquadra} questi sono  i punti ${singolaSquadra.punti} questi sono i falli ${falliSubiti}
        </p>
    </section>
    `
    listaEl.insertAdjacentHTML(`beforeend`, stampaLista);


}
console.log(Squadre);
console.log(listaFalli);
