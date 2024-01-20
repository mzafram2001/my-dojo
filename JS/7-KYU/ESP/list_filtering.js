// NOMBRE: Filtrado de Lista
// AUTOR: cmgerber
// NIVEL: 7 Kyu
//
// DESCRIPCIÓN:
// En este kata, crearás una función que tome una lista de números 
// no negativos y cadenas, y devuelva una nueva lista con las cadenas filtradas.
//
// Ejemplo:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//
// Define una función llamada filter_list que tome un array como parámetro.
function filter_list(list) {
    // Declara un nuevo array vacío para almacenar los elementos filtrados
    let newList = [];
    // Itera sobre cada elemento del array de entrada usando un bucle for
    for (let i = 0; i <= list.length; i++) {
        // Verifica si el elemento actual es un número
        if (!isNaN(list[i]) && typeof list[i] == "number") {
            // Si el elemento es un número, agrégalo al array newList
            newList.push(list[i]);
        }
    }
    // Imprime el array filtrado en la consola
    console.log(newList);
    // Devuelve el array filtrado
    return newList;
}