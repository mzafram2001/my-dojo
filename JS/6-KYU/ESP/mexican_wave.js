// NOMBRE: Ola Mexicana
// AUTOR: adrian.eyre
// NIVEL: 6 Kyu
//
// DESCRIPCIÓN:
// La ola (conocida como la ola mexicana en el mundo de habla inglesa 
// fuera de América del Norte) es un ejemplo de ritmo metacrónico logrado 
// en un estadio lleno cuando grupos sucesivos de espectadores se levantan 
// brevemente, gritan y levantan los brazos. Inmediatamente al alcanzar la 
// altura completa, el espectador vuelve a la posición habitual sentada.
// 
// El resultado es una ola de espectadores de pie que se desplaza por la 
// multitud, aunque los espectadores individuales nunca se mueven de sus asientos. 
// En muchos estadios grandes, la multitud está sentada en un circuito contiguo 
// alrededor del campo deportivo, por lo que la ola puede viajar continuamente 
// alrededor del estadio; en disposiciones de asientos no contiguos, la ola puede 
// reflejarse de un lado a otro a través de la multitud. Cuando la brecha en los 
// asientos es estrecha, la ola a veces puede pasar a través de ella. Por lo general, 
// solo habrá una cresta de ola presente en un momento dado en un estadio, aunque se 
// han producido olas simultáneas y contra-rotativas.
// 
// En esta sencilla Kata, tu tarea es crear una función que convierta 
// una cadena en una Ola Mexicana. Se te pasará una cadena y debes devolver esa 
// cadena en un array donde una letra mayúscula representa a una persona de pie.
// 
// Reglas
// 1. La cadena de entrada siempre estará en minúsculas pero puede estar vacía.
// 2. Si el carácter en la cadena es un espacio en blanco, omítelo como si fuera un asiento vacío.
// 
// Ejemplo
// wave("hola") => ["Hola", "hOla", "hoLa", "holA"]
// 
// Función para crear un patrón de "ola" a partir de una cadena dada
function olaMexicana(cadena) {
    // Inicializar un array vacío para almacenar el resultado
    let resultado = [];
    // Iterar a través de cada carácter en la cadena de entrada
    for (let i = 0; i < cadena.length; i++) {
        // Comprobar si el carácter actual es un espacio, si es así, pasar a la siguiente iteración
        if (cadena[i] === ' ') {
            continue;
        }
        // Capitalizar el carácter actual y crear una nueva cadena con el carácter modificado
        // Agregarlo al array de resultados
        resultado.push(cadena.slice(0, i) + cadena[i].toUpperCase() + cadena.slice(i + 1));
    }
    // Devolver el array final que representa el patrón de "ola"
    return resultado;
}