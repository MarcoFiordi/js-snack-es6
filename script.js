'use strict'
// creo array bici

// prendo la prima bici come la più leggera

// ciclo su tutte le bici
  // se il peso della bici corrente è minore
    // aggiorno la bici più leggera

// stampo la bici più leggera



// creo un array di oggetti, ogni oggetto rappresenta una bici
const bici = [
    {nome: 'Ripper', peso: 7},
    {nome: 'Zarok', peso: 3},
    {nome: 'Hamilton', peso: 4},
    {nome: 'Palethorn', peso: 6},
    {nome: 'Kiya', peso: 8},
    {nome: 'Conte', peso: 5},
    {nome: 'Fortesque', peso: 10}
];
// inizializzo una variabile d’appoggio con la prima bici dell’array
// la userò per tenere traccia della bici più leggera trovata
let biciLeggera = bici[0];

// ciclo su tutte le bici presenti nell’array
for (let i = 0; i < bici.length; i++){
    let currentPeso = bici[i].peso; // salvo il peso della bici corrente in una variabile
    if (currentPeso < biciLeggera.peso){ // controllo se la bici corrente è più leggera di quella salvata
        biciLeggera = bici[i];  // se sì, aggiorno la variabile con la nuova bici più leggera
    }

};
// stampo in console la bici con peso minore
console.log(biciLeggera);

//=======================================================================================================
// SNACK 2 
//=======================================================================================================


// creo un array di oggetti, ogni oggetto rappresenta una squadra
// con nome, punti e falli inizializzati a 0
const squadre = [
    {nome: 'Casterly Rock', punti: 0, falli: 0},
    {nome: 'High Garden', punti: 0, falli: 0},
    {nome: 'Winterfell', punti: 0, falli: 0},
    {nome: 'Kings Landing', punti: 0, falli: 0},
    {nome: 'Dragon Stone', punti: 0, falli: 0},
    {nome: 'Iron Islands', punti: 0, falli: 0}
];

// creo un nuovo array vuoto che conterrà solo nome e falli
let newArray = [];

// ciclo tutte le squadre per assegnare valori casuali
for (let i = 0; i < squadre.length; i++){

    // assegno un numero random ai punti
    squadre[i].punti = Math.floor(Math.random() * 100);

    // assegno un numero random ai falli
    squadre[i].falli = Math.floor(Math.random() * 100);
}

// ciclo nuovamente tutte le squadre
for (let i = 0; i < squadre.length; i++){

    // creo un nuovo oggetto con solo nome e falli
    // e lo aggiungo al nuovo array
    newArray.push({
        nome: squadre[i].nome,
        falli: squadre[i].falli
    });
}

// stampo il nuovo array con i dati richiesti
console.log(newArray);



