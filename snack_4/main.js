/* 
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const lettere = ["a", "b", "c"]
const numeri = [1, 2, 3]


// creo una funzione
function unioneArray(array_primo, array_secondo) {
    const arrayUnito = []

    array_primo.forEach((element, i) => {
        const array_primo_element = array_primo[i]
        const array_secondo_element = array_secondo[i]
        arrayUnito.push(array_primo_element)
        arrayUnito.push(array_secondo_element)

        // console.log(arrayUnito)

    });
    return [arrayUnito]
}


console.log(unioneArray(lettere, numeri))