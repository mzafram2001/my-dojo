// NOMBRE: Encontrar la letra faltante
// AUTOR: user5036852
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Escribe un método que tome un arreglo de letras consecutivas (en aumento)
// como entrada y devuelva la letra faltante en el arreglo.
//
// Siempre recibirás un arreglo válido. Siempre faltará exactamente una letra.
// La longitud del arreglo siempre será al menos 2.
// El arreglo siempre contendrá letras en un solo caso.
//
// Ejemplo:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (¡Usa el alfabeto inglés con 26 letras!)
//
// Diviértete codificando y por favor no olvides votar y clasificar este kata. :-)
//
// También he creado otros katas. ¡Échales un vistazo si disfrutaste de este kata!
//
// Define una función llamada findMissingLetter que tome un arreglo como parámetro
function findMissingLetter(array) {
    // Usa el método find para buscar un elemento (carácter) en el arreglo
    // donde la diferencia entre los valores charCodeAt() del elemento actual y el siguiente no sea igual a 1
    // Esto indica que hay una letra faltante en la secuencia
    // El método find devuelve el primer elemento que cumple con la condición
    return String.fromCharCode(
        // Obtiene el valor charCodeAt() de la letra faltante
        array
            .find((c, i) => array[i + 1].charCodeAt() - c.charCodeAt() !== 1)
            .charCodeAt() + 1
    );
    // La función devuelve la letra faltante como una cadena de texto
}