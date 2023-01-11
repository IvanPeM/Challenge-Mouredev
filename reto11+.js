"use strict";

/**
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro 
 * (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO 
 * estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO 
 * estén presentes en str1.
 *
 * @param {Stirng} tex1 
 * @param {String} tex2 
 */
function eliminarCaracteres(tex1,tex2){
    let pal1 = textoALista(tex1);
    let pal2 = textoALista(tex2);
    let out1 = out(pal1,pal2);
    let out2 = out(pal2,pal1);
    console.log("out1 : ",out1);
    console.log("out2 : ",out2);
}

/**
 * Funcion que convierte una frase en una lista
 * de las palabras de la frase.
 * @param {String} tex 
 * @returns {[*]}
 */
function textoALista(tex){
    let palabras = [];
    let pal = "";
    for(let letra of tex){
        if(letra == " "){
            palabras.push(pal);
            pal = "";
        }else{
            pal += letra;
        }
    }
    return palabras;
}

/**
 * Funcion que comprueba y te indica las palabras
 * que no contienen.
 * @param {[*]} pa 
 * @param {[*]} pal 
 * @returns {String}
 */
function out(pa,pal){
    let ou = "";
    for(let p of pa){
        let bo = false;
        for(let p2 of pal){
            if(p == p2){
                bo = true;
            }
        }
        if(!bo){
            ou += p;
            ou += " ";
        }
    }
    return ou;
}

eliminarCaracteres("hola buenas chavales ","hola buenas a todos wuachos ");