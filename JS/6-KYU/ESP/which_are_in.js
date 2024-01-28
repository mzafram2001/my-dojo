// NOMBRE: ¿Cuáles están en?
// AUTOR: g964
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// Dadas dos matrices de cadenas a1 y a2, devuelve una matriz ordenada
// en orden lexicográfico de las cadenas de a1 que son subcadenas de las cadenas de a2.
//
// Ejemplo 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// devuelve ["arp", "live", "strong"]
//
// Ejemplo 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// devuelve []
//
// Notas:
// Las matrices están escritas en notación "general". Consulte "Your Test Cases" para ejemplos en su lenguaje.
// En Shell bash, a1 y a2 son cadenas. El retorno es una cadena donde las palabras están separadas por comas.
// Atención: En algunos lenguajes, r debe estar sin duplicados.
//
// Define una función llamada inArray que tome dos matrices como parámetros: array1 y array2
function inArray(array1, array2) {
    // Inicializa una matriz vacía para almacenar los elementos comunes
    var r = [];
    // Recorre cada elemento en array2
    for (let i = 0; i < array2.length; i++) {
        // Para cada elemento en array2, recorre cada elemento en array1
        for (let j = 0; j < array1.length; j++) {
            // Verifica si el elemento actual en array2 incluye el elemento actual en array1
            // y también verifica si el elemento aún no está en la matriz de resultados (r)
            if (array2[i].includes(array1[j]) == true && !r.includes(array1[j])) {
                // Si ambas condiciones se cumplen, agrega el elemento a la matriz de resultados (r)
                r.push(array1[j]);
            }
        }
    }
    // Ordena la matriz de resultados en orden lexicográfico y la devuelve
    return r.sort();
}