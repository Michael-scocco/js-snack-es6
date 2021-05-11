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

// Creare un array di oggetti,
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e
// peso.

const ListaBici = [
    {
        nome : 'bianchi',
        peso : 8
    },
    {
        nome : 'trek',
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

// quale bici pesa di meno?
let biciLeggera = ListaBici[0];//quindi partendo dal primo indice

//vado a ciclare in tutto il mio array di oggetti.
for (var i = 0; i < ListaBici.length; i++) {
    var singolaBici = ListaBici[i];
    // console.log(singolaBici.peso);
    var pesoSingolaBici = singolaBici.peso;

// confronto la variabile biciLeggera con il mio singolo indice riferito a peso
// se, biciLeggera è minore di pesoSingolaBici,
    if (biciLeggera < pesoSingolaBici) {
        console.log(biciLeggera, pesoSingolaBici);
    }

}

// Stampare a schermo la bici con peso minore utilizzando
//  destructuring e template literal





















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
