// Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


let listaBici =[

    {
    'nome' : 'Bianchi',
    'peso' : 6
    },
    {
    'nome' : 'Pavanelli',
    'peso' : 8
    },
    {
    'nome' : 'Mtb',
    'peso' : 10
    },
    {
    'nome' : 'Scott',
    'peso' : 4
    }
            ];

let biciLeggera ={
    'nome': '',
    'peso': Number.MAX_SAFE_INTEGER//il più grande numero che c'è nel computer
};

for (let i = 0; i < listaBici.length; i++) {

    const singolaBici = listaBici[i];

    const {peso} = singolaBici; //assegno il valore di peso

    console.log(singolaBici);

    if (peso < biciLeggera.peso) {
        console.log('questa è la bici', biciLeggera);//per stampare un oggetto, non usare il + ma direttamente la virgola

        biciLeggera = singolaBici;
    }

}
console.log('la bici più leggera è ', biciLeggera);
// ____________________________________________________________________________ 

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.

let listaSquare = [
    {
        'nome' : 'Ancona',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Civitanova',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Macerata',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Perugia',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

function randomValori(min, max) {
    let valoreMin = min;
    let valoreMax = max - valoreMin + 1;

    let valori = Math.floor(Math.random() * valoreMax) + valoreMin;

return valori;
}



for (let i = 0; i < listaSquare.length; i++) {

    let squadra = listaSquare[i];
    squadra['puntiFatti'] = randomValori(0, 50);
    squadra['falliSubiti'] = randomValori(0, 50);
    console.log(squadra);
    let {falliSubiti} = squadra;
    console.log(falliSubiti);
}
console.log(listaSquare);



const student = {//questo è un oggetto quindi lo richiamo con le graffe

    'nome' : 'michael',
    'cognome' : 'scocco',
    'email' : 'scocco@'
};

const descrizione = student['nome'];
const descrizione2 = student['cognome'];
console.log(descrizione, descrizione2);
const {nome, email} = student;
console.log(nome, email);

const studenti = ['paolo', 'olga', 'gianluca', 'mario'];//questo è un array quindi lo richiamo con le quadre

const [studente, , ,studente4] = studenti;
console.log(studente,studente4);
