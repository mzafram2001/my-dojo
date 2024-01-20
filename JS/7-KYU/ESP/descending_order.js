// NOMBRE: Orden Descendente
// AUTOR: TastyOs
// NIVEL: 7 Kyu
//
// DESCRIPCIÓN:
// Tu tarea es crear una función que pueda tomar cualquier número entero no negativo
// como argumento y devolverlo con sus dígitos en orden descendente.
// Básicamente, reorganiza los dígitos para crear el número más alto posible.
//
// Ejemplos::
// Entrada: 42145 Salida: 54421
// Entrada: 145263 Salida: 654321
// Entrada: 123456789 Salida: 987654321
//
// Define una función llamada descendingOrder que tome un único parámetro 'n'
function descendingOrder(n) {
    // Convierte el número 'n' en un array de sus dígitos usando Array.from y String,
    // luego convierte cada dígito de nuevo a un número
    const digits = Array.from(String(n), Number);
    // Ordena el array de dígitos en orden descendente usando el método sort y una función de comparación personalizada
    const sortedDigits = digits.sort((a, b) => b - a);
    // Convierte el array de dígitos ordenados de nuevo a un número uniéndolos como cadena y luego parseándolos como entero
    const result = parseInt(sortedDigits.join(''));
    // Devuelve el resultado final, que es el número de entrada 'n' con sus dígitos reorganizados en orden descendente
    return result;
}