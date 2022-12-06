// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


const animals = [
    {nome : 'leone',  famiglia: 'felidi', classe: 'mammiferi'},

    {nome:'cane', famiglia: 'canidi', classe: 'mammiferi'},

    {nome:'gatto', famiglia: 'gattidi', classe:'felini'},

    {nome:'tigre', famiglia:'tigrotti', classe:'felini'}, 

    {nome:'elefante', famiglia:'elefanti',classe:'mammiferi'},
]

const mammiferi = animals.filter((animals) => animals.classe === 'mammiferi');

console.log(mammiferi);
