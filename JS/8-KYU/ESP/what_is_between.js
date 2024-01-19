// NOMBRE: ¿Qué hay entre?
// AUTOR: sgwozdz
// NIVEL: 8 Kyu
//
// DESCRIPCIÓN:
// Completa la función que toma dos enteros (a, b, donde a < b) y 
// devuelve un array de todos los enteros entre los parámetros de entrada, incluyéndolos.
//
// Por ejemplo:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//
// Define una función llamada 'between' con dos parámetros 'a' y 'b'
function between(a, b) {
    // Inicializa un array vacío para almacenar el rango de valores entre 'a' y 'b'
    let arr = [];
    // Utiliza un bucle 'for' para iterar a través de los valores desde 'a' hasta 'b' (inclusive)
    for (let i = a; i <= b; i++) {
        // Añade cada valor al array 'arr'
        arr.push(i);
    }
    // Devuelve el array que contiene el rango de valores entre 'a' y 'b'
    return arr;
}