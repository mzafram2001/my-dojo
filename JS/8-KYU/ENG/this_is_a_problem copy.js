// NOMBRE: "esto" es un problema
// AUTOR: priyankaherur
// NIVEL: 8 Kyu
//
// DESCRIPCIÓN:
// Queremos crear una función constructora 'NameMe', que tome el primer 
// nombre y el apellido como parámetros. La función combina el primer y 
// último nombre y guarda el valor en la propiedad "name".
// 
// Ya implementamos esa función, pero cuando ejecutamos el código, la propiedad
// "name" es accesible, pero "firstName" y "lastName" no son accesibles. 
// ¿Puedes encontrar qué está mal con ello? También hay un conjunto de pruebas disponible.
//
// Define una función llamada NameMe que tome dos parámetros: first (primero) y last (último)
function NameMe(first, last) {
    // Crea un objeto y asigna el parámetro 'first' a la propiedad firstName
    // y el parámetro 'last' a la propiedad lastName
    this.firstName = first;
    this.lastName = last;
    // Retorna un objeto con una propiedad 'name' que contiene el nombre completo
    return { name: this.firstName + ' ' + this.lastName };
}