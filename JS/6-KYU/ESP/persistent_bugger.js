// NOMBRE: Persistencia Persistente
// AUTOR: joh_pot
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Escribe una función, persistence, que tome un parámetro positivo
// num y devuelva su persistencia multiplicativa, que es
// el número de veces que debes multiplicar los dígitos en num hasta llegar a un solo dígito.
//
// Por ejemplo (Entrada --> Salida):
// 39 --> 3 (porque 3*9 = 27, 2*7 = 14, 1*4 = 4 y 4 tiene solo un dígito)
// 999 --> 4 (porque 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, y finalmente 1*2 = 2)
// 4 --> 0 (porque 4 ya es un número de un solo dígito)
//
// Define una función llamada 'persistence' que tome un número 'num' como entrada.
function persistence(num) {
    // Inicializa una variable 'times' para llevar un registro del número de iteraciones.
    var times = 0;
    // Convierte el número de entrada a una cadena para facilitar la manipulación de sus dígitos.
    num = num.toString();
    // Continúa el bucle hasta que la longitud de la representación de cadena de 'num' sea 1.
    while (num.length > 1) {
        // Incrementa la variable 'times' para llevar un registro del número de iteraciones.
        times++;
        // Divide la cadena en un array de caracteres, convierte cada carácter a un número,
        // luego utiliza el método reduce para multiplicar todos los números en el array.
        num = num
            .split("")
            .map(Number)
            .reduce((a, b) => a * b)
            .toString();
    }
    // Devuelve el valor final de 'times', que representa el número de iteraciones.
    return times;
}