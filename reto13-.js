"use strict";

/**
 * Reto #13
 * FACTORIAL RECURSIVO
 * Fecha publicación enunciado: 28/03/22
 * Fecha publicación resolución: 04/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
 * 
 * @param {Number} n 
 * @returns {Number}
 */
function factorial(n){
    let resultado = 0;
    if(n == 0 || n == 1){
        resultado = 1;
    }else if(n > 1){
        resultado = n * factorial(n-1);
    }
    return resultado;
}

console.log(factorial(5));