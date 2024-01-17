// NOMBRE: ¿Son iguales?
// AUTOR: g964
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Dados dos arrays a y b, escribe una función comp(a, b) (o compSame(a, b))
// que compruebe si los dos arrays tienen los elementos "iguales", con las mismas
// multiplicidades (la multiplicidad de un miembro es el número de veces que aparece).
// "Iguales" significa, en este caso, que los elementos en b son los elementos en a al cuadrado, 
// independientemente del orden.
//
// Ejemplos:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//
// comp(a, b) devuelve true porque en b 121 es el cuadrado de 11,
// 14641 es el cuadrado de 121, 20736 es el cuadrado de 144, 361 es el cuadrado de 19,
// 25921 es el cuadrado de 161, y así sucesivamente. Se vuelve obvio si escribimos los 
// elementos de b en términos de cuadrados:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
//
// Arrays inválidos
// Si, por ejemplo, cambiamos el primer número a otra cosa, comp ya no devuelve true:
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) devuelve false porque en b 132 no es el cuadrado de ningún número de a.
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a, b) devuelve false porque en b 36100 no es el cuadrado de ningún número de a.
//
// Observaciones
// a o b pueden ser [] o {} (todos los lenguajes excepto R, Shell).
// a o b pueden ser nil o null o None o nada (excepto en C++, COBOL, Crystal, D, Dart,
// Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R,
// Racket, Rust, Shell, Swift).
//
// Si a o b son nil (o null o None, dependiendo del lenguaje), el problema no tiene sentido, 
// sí que devuelve false.
//
// La función comp toma dos arrays 'a' y 'b' como parámetros
function comp(a, b) {
    // Comprueba si 'a' o 'b' es falsy, o si sus longitudes no son iguales
    if (!a || !b || a.length !== b.length) {
        // Si alguna de las condiciones es verdadera, devuelve false inmediatamente
        return false;
    }
    // Mapea cada elemento del array 'a' elevado al cuadrado y almacena en 'squaredA'
    const squaredA = a.map(x => x ** 2);
    // Ordena el array squaredA en orden ascendente
    const sortedSquaredA = squaredA.sort((x, y) => x - y);
    // Ordena el array 'b' en orden ascendente
    const sortedB = b.sort((x, y) => x - y);
    // Comprueba si la versión stringificada de sortedSquaredA es igual a la versión stringificada de sortedB
    return JSON.stringify(sortedSquaredA) === JSON.stringify(sortedB);
}