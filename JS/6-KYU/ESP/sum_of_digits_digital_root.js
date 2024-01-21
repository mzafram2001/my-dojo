// NOMBRE: Suma de Dígitos / Raíz Digital
// AUTOR: user578387
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// La raíz digital es la suma recursiva de todos los dígitos en un número.
// Dado n, se toma la suma de los dígitos de n. Si ese valor
// tiene más de un dígito, continúa reduciéndolo de esta manera hasta
// que se produce un número de un solo dígito. La entrada será un entero no negativo.
// 
// Ejemplos
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 -->  1 + 1 = 2
//
// Define una función llamada digital_root que toma un solo parámetro 'n'
function digital_root(n) {
    // Calcular la raíz digital usando la fórmula: ((n - 1) % 9) + 1
    // Esta fórmula se deriva de la propiedad de que la raíz digital de un número
    // es equivalente al resto del número menos 1 cuando se divide por 9, más 1.

    // Explicación:
    // - Restar 1 de 'n': Esto ayuda a manejar el caso en que 'n' mismo es un múltiplo de 9.
    // - Tomar el resto al dividir por 9: Esto asegura que el resultado esté entre 0 y 8.
    // - Sumar 1 al resultado: Esto ajusta el rango para que esté entre 1 y 9 (inclusive).

    // Devolver la raíz digital calculada
    return ((n - 1) % 9) + 1;
}