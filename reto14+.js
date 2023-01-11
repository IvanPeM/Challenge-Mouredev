"use strict";

/**
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 * 
 * @param {Number} n 
 * @returns {Boolean}
 */
function armstrong(n){
    let boo = false;
    let suma = 0;
    for(let num of n){
        suma += Math.pow(num,n.length);
    }
    if(suma == n){
        boo = true;
    }
    return boo;
}

console.log(armstrong("372"));
console.log(armstrong("371"));