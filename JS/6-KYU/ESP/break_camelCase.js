// NOMBRE: Romper CamelCase
// AUTOR: hakt
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Completa la solución para que la función divida el CamelCase, utilizando un espacio entre palabras.
// 
// Ejemplo
// "camelCasing"  =>  "camel Casing"
// "identificador"   =>  "identificador"
// ""             =>  ""
//
// Define una función llamada 'solution' que tome un único parámetro 'string'
function solution(string) {
    // Utiliza el método replace en la cadena de entrada con una expresión regular
    // La expresión regular coincide con cualquier letra mayúscula (A-Z)
    // La bandera 'g' asegura que coincida con todas las ocurrencias, no solo la primera
    // Reemplaza cada letra mayúscula con un espacio seguido de la misma letra mayúscula
    // Esto efectivamente añade un espacio antes de cada letra mayúscula en la cadena
    return string.replace(/([A-Z])/g, " $1");
}