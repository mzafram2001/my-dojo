// NOMBRE: ¿Recibo un bono?
// AUTOR: PG1
// NIVEL: 8 Kyu
//
// DESCRIPCIÓN:
// ¡Es hora de recibir el bono en la gran ciudad! Los gatos gordos se frotan las patas con anticipación...
// pero, ¿quién va a ganar más dinero?
//
// Construye una función que tome dos argumentos (salario, bono).
// El salario será un número entero y el bono un booleano.
//
// Si el bono es true, el salario se debe multiplicar por 10.
// Si el bono es false, el gato gordo no ganó lo suficiente y solo debe recibir su salario indicado.
//
// Devuelve la cifra total que la persona recibirá como una cadena
// con el signo correspondiente: "£" (=\u00A3, en JS, Go, Java, Scala y Julia),
// "$" (en C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell y Lua) o "¥" (en Rust).
//
// Define una función llamada bonusTime que tome dos parámetros: salario y bono
function bonusTime(salary, bonus) {
    // Verifica si el bono es verdadero (no falso, 0, indefinido, nulo, etc.)
    if (bonus) {
        // Si el bono es true, calcula el nuevo salario multiplicando el salario original por 10
        let newSalary = salary * 10;
        // Convierte el nuevo salario a cadena y concaténalo con el signo de libra ('£')
        let salaryString = '£' + newSalary.toString();
        // Devuelve la cadena de salario resultante
        return salaryString;
    } else {
        // Si el bono es falso, convierte el salario original a cadena y concaténalo con el signo de libra ('£')
        let salaryString = '£' + salary.toString();
        // Devuelve la cadena de salario resultante
        return salaryString;
    }
}