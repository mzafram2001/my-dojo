// NOMBRE: Detén gninnipS My sdroW!
// AUTOR: xDranik
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Escribe una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras que tengan cinco o más letras invertidas (como el nombre de esta Kata). Las cadenas proporcionadas consistirán solo de letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.
//
// Ejemplos:
// "Hey compañeros guerreros"  --> "Hey wollef sroirraw" 
// "Esto es una prueba"        --> "Esto es una prueba" 
// "Esto es otra prueba"       --> "Esto es rehtona prueba"
//
// Define una función llamada spinWords que tome una cadena 's' como su parámetro.
function spinWords(s) {
    // Divide la cadena de entrada en un array de palabras usando un espacio como delimitador.
    var splitString = s.split(" ");
    // Inicializa un array vacío para almacenar las palabras modificadas.
    var joinArray = [];
    // Itera a través de cada palabra en el array splitString usando forEach.
    splitString.forEach(element => {
        // Verifica si la longitud de la palabra actual es mayor o igual a 5.
        if (element.length >= 5) {
            // Si la condición es verdadera, divide la palabra en un array de caracteres.
            var splitElement = element.split("");
            // Invierte el orden de los caracteres en el array.
            var reverseArray = splitElement.reverse();
            // Une el array invertido de caracteres para formar la palabra modificada.
            joinArray.push(reverseArray.join(""));
        } else {
            // Si la longitud de la palabra es menor a 5, agrega la palabra original al array.
            joinArray.push(element);
        }
    });
    // Une el array de palabras modificadas en una cadena usando un espacio como separador y devuelve el resultado.
    return joinArray.join(" ");
}