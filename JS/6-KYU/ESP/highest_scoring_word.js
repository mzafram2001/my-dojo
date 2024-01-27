// NOMBRE: Palabra de mayor puntuación
// AUTOR: PG1
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Dada una cadena de palabras, necesitas encontrar la palabra de mayor puntuación.
// 
// Cada letra de una palabra suma puntos según su posición en el alfabeto: a = 1, b = 2, c = 3, etc.
// 
// Por ejemplo, la puntuación de la palabra "abad" es 8 (1 + 2 + 1 + 4).
// 
// Debes devolver la palabra de mayor puntuación como una cadena.
// 
// Si dos palabras tienen la misma puntuación, devuelve la palabra que aparece antes en la cadena original.
// 
// Todas las letras estarán en minúsculas y todas las entradas serán válidas.
//
// Define una función llamada 'high' que tome una cadena 's' como parámetro.
function high(s) {
    // Divide la cadena de entrada 's' en un array de palabras usando el espacio como delimitador.
    let as = s
        .split(" ")
        // Para cada palabra, conviértela en un array de caracteres y luego calcula la suma acumulativa
        // de los valores ASCII de cada carácter menos 96 (para convertir los valores ASCII a una posición alfabética basada en 1).
        .map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    // Encuentra el índice del valor máximo en el array 'as'.
    // Esto dará el índice de la palabra con la suma acumulativa más alta de los valores ASCII.
    // Si hay varias palabras con el mismo valor máximo, el método indexOf devolverá la primera ocurrencia.
    let maxIndex = as.indexOf(Math.max(...as));
    // Divide la cadena original en un array de palabras y devuelve la palabra en el índice calculado maxIndex.
    return s.split(" ")[maxIndex];
}