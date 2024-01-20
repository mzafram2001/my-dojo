// NOMBRE: Obtener el Carácter Medio
// AUTOR: Shivo
// NIVEL: 7 Kyu
//
// DESCRIPCIÓN:
// Se te proporcionará una palabra. Tu tarea es devolver el carácter medio de la palabra.
// Si la longitud de la palabra es impar, devuelve el carácter medio. Si la longitud es par, devuelve los 2 caracteres del medio.
//
// Ejemplos::
// Kata.getMiddle("test") debería devolver "es"
// Kata.getMiddle("testing") debería devolver "t"
// Kata.getMiddle("middle") debería devolver "dd"
// Kata.getMiddle("A") debería devolver "A"
//
// #Entrada
// Una palabra (cadena) de longitud 0 < str < 1000 (En JavaScript, puedes obtener ligeramente más de 1000 en algunos casos de prueba debido a un error en las pruebas).
// No es necesario comprobar esto. Esto solo está aquí para decirte que no tienes que preocuparte por que tu solución tarde demasiado.
// 
// #Salida
// El/los carácter(es) medio de la palabra representado como una cadena.
//
// Define una función llamada getMiddle que tome una cadena 's' como parámetro.
function getMiddle(s) {
    // Declarar variables para verificar si la longitud de la cadena es par o impar.
    var impar, par = false;
    // Declarar una variable para almacenar el resultado.
    var res = "";
    // Verificar si la longitud de la cadena es par.
    if (s.length % 2 === 0) {
        par = true; // Establecer la variable 'par' a true.
    } else {
        impar = true; // Establecer la variable 'impar' a true.
    }
    // Verificar si la longitud es par.
    if (par) {
        // Si es par, concatenar los dos caracteres del medio y almacenarlos en la variable de resultado.
        res = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        // Si es impar, obtener el carácter medio y almacenarlo en la variable de resultado.
        res = s[Math.floor(s.length / 2)];
    }
    // Devolver el resultado.
    return res;
}