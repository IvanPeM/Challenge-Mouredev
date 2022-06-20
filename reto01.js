"use strict";

/**
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y 
 * retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras 
 * de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 */
function anagrama(palabra1, palabra2) {
    if (palabra1 == palabra2) {
        return false;
    }
    let p1 = ordenar(palabra1);
    let p2 = ordenar(palabra2);
    if (comprobar(p1,p2)) {
        return true;
    }
    return false;
}

console.log(anagrama("roma", "amor"));
console.log(anagrama("roma", "roma"));
console.log(anagrama("roma", "rama"));

function ordenar(palabra) {
    let lista = [];
    for (let letra of palabra) {
        lista.push(letra);
    }
    lista.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    return lista;
}

function comprobar(p1, p2) {
    for (let i = 0; i < p1.length; i++) {
        if(p1[i] != p2[i]){
            return false;
        }
    }
    return true;
}