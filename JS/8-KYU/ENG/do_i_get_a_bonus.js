// NAME: Do I get a bonus?
// AUTHOR: PG1
// LEVEL: 8 Kyu
//
// DESCRIPTION:
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
// but who is going to make the most money?
//
// Build a function that takes in two arguments (salary, bonus). 
// Salary will be an integer, and bonus a boolean.
//
// If bonus is true, the salary should be multiplied by 10. 
// If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//
// Return the total figure the individual will receive as a string 
// prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), 
// "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
//
// Define a function named bonusTime that takes two parameters: salary and bonus
function bonusTime(salary, bonus) {
    // Check if the bonus is truthy (not false, 0, undefined, null, etc.)
    if (bonus) {
        // If bonus is true, calculate the new salary by multiplying the original salary by 10
        let newSalary = salary * 10;
        // Convert the new salary to a string and concatenate it with the pound sign ('£')
        let salaryString = '£' + newSalary.toString();
        // Return the resulting salary string
        return salaryString;
    } else {
        // If bonus is falsy, convert the original salary to a string and concatenate it with the pound sign ('£')
        let salaryString = '£' + salary.toString();
        // Return the resulting salary string
        return salaryString;
    }
}