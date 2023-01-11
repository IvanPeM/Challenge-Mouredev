"use strict";

/**
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * @param {String} texto 
 */
function morse(texto) {
    let mor = "";
    let text = "";
    let codigo = {
        "A": ".—", "N": "—.", "0": "—————",
        "B": "—...", "Ñ": "——.——", "1": ".————",
        "C": "—.—.", "O": "———", "2": "..———",
        "CH": "————", "P": ".——.", "3": "...——",
        "D": "—..", "Q": "——.—", "4": "....—",
        "E": ".", "R": ".—.", "5": ".....",
        "F": "..—.", "S": "...", "6": "—....",
        "G": "——.", "T": "—", "7": "——...",
        "H": "....", "U": "..—", "8": "———..",
        "I": "..", "V": "...—", "9": "————.",
        "J": ".———", "W": ".——", ".": ".—.—.—",
        "K": "—.—", "X": "—..—", ",": "——..——",
        "L": ".—..", "Y": "—.——", "?": "..——..",
        "M": "——", "Z": "——..", "\"": ".—..—.", "/": "—..—."
    };

    if (typeof (texto) == String) {
        for (let letra of texto) {
            mor += codigo[letra] + " ";
        }
        console.log(mor, " que era ", texto);
    } else {
        let letra = "";
        for (let i = 0; i <= texto.length; i++) {
            if (texto[i] == " " || i == texto.length) {
                for (let letraa in codigo) {
                    if (letra == codigo[letraa]) {
                        text += letraa;
                        letra = "";
                    }
                }
            } else {
                letra += texto[i];
            }
        }
        console.log(text, " que era ", texto);
    }
}

morse("HOLA");
morse(".... ——— .—.. .—");