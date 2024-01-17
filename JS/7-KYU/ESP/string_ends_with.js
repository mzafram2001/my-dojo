// NOMBRE: ¿La cadena termina con?
// AUTOR: jhoffner
// NIVEL: 7 Kyu
//
// DESCRIPCIÓN:
// Completa la solución para que devuelva true si el primer argumento (cadena) pasado
// termina con el segundo argumento (también una cadena).
//
// Ejemplos:
// solution('abc', 'bc') // devuelve true
// solution('abc', 'd') // devuelve false
//
// Define una función llamada 'solution' que tome dos parámetros: 'str' (una cadena) y 'ending' (una subcadena).
function solution(str, ending) {
    // Comprueba si 'str' termina con el 'ending' especificado.
    if (str.endsWith(ending) == true) {
        // Si la condición es verdadera, devuelve true.
        return true;
    } else {
        // Si la condición es falsa, devuelve false.
        return false;
    }
}