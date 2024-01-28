// NAME: Break camelCase
// AUTHOR: hakt
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.
// 
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//
// Define a function named 'solution' that takes a single parameter 'string'
function solution(string) {
    // Use the replace method on the input string with a regular expression
    // The regular expression matches any uppercase letter (A-Z)
    // The 'g' flag ensures that it matches all occurrences, not just the first one
    // Replace each uppercase letter with a space followed by the same uppercase letter
    // This effectively adds a space before each uppercase letter in the string
    return string.replace(/([A-Z])/g, " $1");
}