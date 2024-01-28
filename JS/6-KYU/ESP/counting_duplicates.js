// NOMBRE: Conteo de Duplicados
// AUTOR: kgashok
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Escribe una función que devuelva el conteo de caracteres alfabéticos y dígitos numéricos distintos, sin distinguir mayúsculas y minúsculas, que ocurran más de una vez en la cadena de entrada. Se puede asumir que la cadena de entrada contiene solo letras del alfabeto (mayúsculas y minúsculas) y dígitos numéricos.

// Ejemplo
// "abcde" -> 0 # ningún carácter se repite más de una vez
// "aabbcde" -> 2 # 'a' y 'b'
// "aabBcde" -> 2 # 'a' ocurre dos veces y 'b' dos veces (`b` y `B`)
// "indivisibility" -> 1 # 'i' ocurre seis veces
// "Indivisibilities" -> 2 # 'i' ocurre siete veces y 's' ocurre dos veces
// "aA11" -> 2 # 'a' y '1'
// "ABBA" -> 2 # 'A' y 'B' ocurren cada uno dos veces
//
// Define una función llamada duplicateCount que toma un texto como parámetro
function duplicateCount(text) {
    // Convierte el texto de entrada a minúsculas para hacer la comparación sin distinguir mayúsculas y minúsculas
    const lowerCaseInput = text.toLowerCase();
    // Crea un objeto vacío para almacenar la frecuencia de cada carácter en el texto en minúsculas
    const charFrequency = {};
    // Inicializa una variable para llevar el seguimiento del conteo de caracteres duplicados
    let duplicates = 0;
    // Recorre cada carácter en el texto en minúsculas
    for (let char of lowerCaseInput) {
        // Verifica si el carácter ya está presente en el objeto charFrequency
        if (charFrequency[char]) {
            // Si el carácter ya está presente, incrementa su frecuencia
            charFrequency[char]++;
            // Si la frecuencia se vuelve 2 (indicando la segunda ocurrencia), incrementa el conteo de duplicados
            if (charFrequency[char] === 2) {
                duplicates++;
            }
        } else {
            // Si el carácter no está presente en charFrequency, inicializa su frecuencia en 1
            charFrequency[char] = 1;
        }
    }
    // Devuelve el conteo total de caracteres duplicados
    return duplicates;
}