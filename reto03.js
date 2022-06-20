"use strict";

/**
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * @param {Number} n1
 */
function primoOno(n1){
    for(let i = 0;i< 100;i++){
        if(i %n1 == 0){
            console.log(i);
        }
    }
}

primoOno(4);