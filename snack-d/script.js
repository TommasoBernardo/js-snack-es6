/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const peoples = [
    {
    nome : 'Romana',
    cognome :'Rottu',
    età : 55,
    },
    {
        nome : 'Michela',
        cognome :'Enardi',
        età : 16,
    },
    {
        nome : 'Mario',
        cognome :'Rossi',
        età : 85,
    },
    {
        nome : 'Rossi',
        cognome :'Olde',
        età : 18,
    },
    {
        nome : 'Giovanni',
        cognome :'Muccia',
        età : 95,
    },
    {
        nome : 'Edoardo',
        cognome :'Piscolo',
        età : 15,
    },
    {
        nome : 'Franco',
        cognome :'Ariete',
        età : 25,
    },
    {
        nome : 'Edoardo',
        cognome :'Mangisco',
        età : 17,
    },
    {
        nome : 'Ernesto',
        cognome :'Baldi',
        età : 13,
    },
    {
        nome : 'Cocciu',
        cognome :'filiberto',
        età : 20,
    }
]


const patente = peoples.map((person) => {
    const maggiorenne = person.età >= 18;
    return `${person.nome} ${person.cognome} , ${maggiorenne} ` 
})

console.log(patente);

