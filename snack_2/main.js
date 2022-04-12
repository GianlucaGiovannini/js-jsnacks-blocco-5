/* 
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

const zucchineLunghe = zucchine.filter(zucchina => zucchina.lunghezza < 15)
console.log(zucchineLunghe)

const zucchineCorte = zucchine.filter(zucchina => zucchina.lunghezza > 15)
console.log(zucchineCorte)

let sommaZucchineLunghe = 0;
let sommaZucchineCorte = 0;

zucchineLunghe.forEach(zucchina => {
    sommaZucchineLunghe += zucchina.peso
})
console.log(sommaZucchineLunghe)

zucchineCorte.forEach(zucchina => {
    sommaZucchineCorte += zucchina.peso
})
console.log(sommaZucchineCorte)