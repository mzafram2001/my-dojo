// NOMBRE: Array.diff
// AUTOR: marcinbunsch
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Tu objetivo en este kata es implementar una función de diferencia, la cual resta una lista de otra y devuelve el resultado.
// 
// Debería eliminar todos los valores de la lista 'a' que estén presentes en la lista 'b' manteniendo su orden.
// 
// arrayDiff([1,2],[1]) == [2]
// Si un valor está presente en 'b', todas sus ocurrencias deben eliminarse de la otra lista:
// 
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// 
// Define una función llamada 'array_diff' que tome dos arreglos como parámetros, 'a' y 'b'.
function array_diff(a, b) {
    // Utiliza el método 'filter' en el array 'a'
    // Por cada elemento 'e' en el array 'a', solo conserva los elementos para los cuales la condición dentro de la función flecha es verdadera
    // La condición verifica si el elemento actual 'e' NO está incluido en el array 'b'
    // Entonces, el array resultante solo contendrá elementos de 'a' que no estén presentes en 'b'
    return a.filter(e => !b.includes(e));
}