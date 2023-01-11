"use strict";

/**
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Fecha publicación enunciado: 21/03/22
 * Fecha publicación resolución: 28/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 * 
 * @param {String} texto 
 * @returns {boolean}
 */
function palindromo(texto) {
    let boo = false;
    let reves = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        reves += texto[i];
    }
    if(reves == texto){
        boo = true;
    }
    return boo;
}

console.log(palindromo("roma"));