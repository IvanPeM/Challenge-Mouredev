"use strict";

/**
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * @param {Stirng} expresion 
 */
function expresiones(expresion){
    let parentesisOpen = 0;
    let llavesOpen = 0;
    let corchetesOpen = 0;
    let parentesisClose = 0;
    let llavesClose = 0;
    let corchetesClose = 0;
    for(let caracter of expresion){
        switch(caracter){
            case "(":
                parentesisOpen	++;
                break;
            case ")":
                parentesisClose ++;
                break;
            case "{":
                llavesOpen ++;
                break;
            case "}":
                llavesClose ++;
                break;
            case "[":
                corchetesOpen ++;
                break;
            case "]":
                corchetesClose ++;
                break;
        }
    }
    if(parentesisOpen != parentesisClose){
        return false;
    }else if(llavesOpen != llavesClose){
        return false;
    }else if(corchetesOpen != corchetesClose){
        return false;
    }
    return true;
}

if(expresiones("{ a * ( c + d ) ] - 5 }")){
    console.log("Es una expresion balanceada.");
}else{
    console.log("No es una expresion balanceada.");
}