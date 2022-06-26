"use strict";

/**
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada 
 * palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * @param {String} texto
 */
function contarPalabras(texto){
    let palabras = [];
    let pal = "";
    for(let letra of texto){
        if(letra == " "){
            palabras.push(pal);
            pal = "";
        }else{
            pal += letra;
        }
    }
    let contador = 0;
    for(let i = 0;i< palabras.length;i++){
        for(let j = 0;j<palabras.length;j++){
            if(palabras[i] == palabras[j]){
                contador++;
            }
        }
        console.log(palabras[i]," : ",contador);
        contador = 0;
    }
}

contarPalabras("hola buenas a todos amigos buenas ");