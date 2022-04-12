/* 
    Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */

/**
 * ## Invertitore di parole
 * @param {string} word scrivi la parola che vuoi invertire
 * @returns {string} parola invertita
 */
function reverse(word) {
    const wordReverse = word.split("").reverse().join("")
    return wordReverse

    // oppure 
    // return word.split("").reverse().join("")
}
console.log(reverse("ciao"))