"use strict";

/**
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) 
 * que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 * 
 * @param {*} poligono
 */
function area(poligono) {
    let calculo = 0;
    switch (poligono.nombre) {
        case "triangulo":
            calculo = poligono.base * poligono.altura / 2;
            break;
        case "rectangulo":
            calculo = poligono.base * poligono.altura;
            break;
        case "cuadrado":
            calculo = poligono.lado * 2;
            break;
        default:
            console.log("No tengo el cálculo de ese polígono.");
            break;
    }
    console.log(calculo);
}

let triangulo = {
    nombre: "triangulo",
    altura: 120,
    base: 50
};

let rectangulo = {
    nombre: "rectangulo",
    base: 30,
    altura: 40
};

let cuadrado = {
    nombre: "cuadrado",
    lado: 50
};

area(cuadrado);