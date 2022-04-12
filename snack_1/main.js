/* 
    Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
    Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
    { varieta: "Faenza", peso: 10, lunghezza: 15 },
    { varieta: "Faenza", peso: 30, lunghezza: 10 },
    { varieta: "Faenza", peso: 40, lunghezza: 12 },
    { varieta: "Faenza", peso: 50, lunghezza: 22 },
    { varieta: "Faenza", peso: 60, lunghezza: 14 },
    { varieta: "Faenza", peso: 45, lunghezza: 12 },
    { varieta: "Faenza", peso: 30, lunghezza: 5 },
    { varieta: "Faenza", peso: 15, lunghezza: 25 },
    { varieta: "Faenza", peso: 22, lunghezza: 7 },
    { varieta: "Faenza", peso: 32, lunghezza: 9 },
]

// calcolare il peso di tutte le zucchine sommandole

let sum = 0;

zucchine.forEach(zucchina => {
    const zucchinaPeso = zucchina.peso

    sum += zucchinaPeso

})
console.log(sum)