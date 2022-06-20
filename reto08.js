"use strict";

/**
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar 
 * un número decimal a binario sin utilizar funciones propias 
 * del lenguaje que lo hagan directamente.
 *
 * @param {Number} numero 
 */
function decimalAbinario(numero) {
    let binario = "";
    while (numero != 0) {
        let resto = numero % 2;
        numero = Math.trunc(numero /2);
        binario += resto;
    }
    console.log(binario);
}

decimalAbinario(5);