// NOMBRE: ¿Mi número se ve grande con esto?
// AUTOR: JulianNicholls
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Un Número Narcisista (o Número de Armstrong) es un número positivo que 
// es la suma de sus propios dígitos, cada uno elevado a la potencia del número de 
// dígitos en una base dada. En este Kata, nos limitaremos al decimal (base 10).

// Por ejemplo, toma 153 (3 dígitos), que es narcisista:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// y 1652 (4 dígitos), que no lo es:
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
//
// El Desafío:
// Tu código debe devolver true o false (no 'true' y 'false') dependiendo de 
// si el número dado es un número narcisista en base 10.
//
// Esto puede ser Verdadero y Falso en tu lenguaje, por ejemplo, PHP.
// 
// No se requiere verificación de errores para cadenas de texto u otras entradas no válidas, solo 
// se pasarán enteros positivos no nulos válidos a la función.
//
// Define una función llamada narcissistic que tome un solo argumento 'valor'
function narcissistic(value) {
    // Convierte el número dado a una cadena y luego divídelo en un array de dígitos
    return (
        // Mapea cada dígito, calcula su potencia a la longitud del array (número de dígitos),
        // y crea un nuevo array con estos valores
        value.toString().split("").map((v, i, arr) => Math.pow(arr[i], arr.length))
        // Calcula la suma de todos los valores en el array usando reduce
        .reduce((a, b) => a + b, 0)
        // Verifica si la suma es igual al valor original
        === value
    );
}