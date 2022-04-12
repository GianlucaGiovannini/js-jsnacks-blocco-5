/* 
    Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */

function reverse(word) {
    const wordReverse = word.split("").reverse().join("")
    return wordReverse
}
console.log(reverse("ciao"))