// NOMBRE: Unos y Zeros
// AUTOR: user4386369
// NIVEL: 7 Kyu
//
// DESCRIPCIÓN:
// Dada una matriz de unos y ceros, convierte el valor binario equivalente a un número entero.
//
// Ej: [0, 0, 0, 1] se trata como 0001, que es la representación binaria de 1.
// 
// Ejemplos:
// 
// Prueba: [0, 0, 0, 1] ==> 1
// Prueba: [0, 0, 1, 0] ==> 2
// Prueba: [0, 1, 0, 1] ==> 5
// Prueba: [1, 0, 0, 1] ==> 9
// Prueba: [0, 0, 1, 0] ==> 2
// Prueba: [0, 1, 1, 0] ==> 6
// Prueba: [1, 1, 1, 1] ==> 15
// Prueba: [1, 0, 1, 1] ==> 11
// Sin embargo, las matrices pueden tener longitudes variables, no solo limitadas a 4.
//
// Define una función llamada binaryArrayToNumber que toma una matriz (arr) como entrada
const binaryArrayToNumber = arr => {
    // Utiliza la función parseInt para convertir la matriz binaria a un número decimal
    // La función parseInt toma dos parámetros: la cadena a convertir y la base del sistema numérico
    // En este caso, 'arr.join('')' une los dígitos binarios en una cadena y se especifica la base como 2 (binario)
    const decimalNumber = parseInt(arr.join(''), 2);
    // Devuelve el número decimal resultante
    return decimalNumber;
};