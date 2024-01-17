// NAME: String ends with?
// AUTHOR: jhoffner
// LEVEL: 7 Kyu
//
// DESCRIPTION:
// Complete the solution so that it returns true if the first argument (string) passed 
// in ends with the 2nd argument (also a string).
//
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Define a function named 'solution' that takes two parameters: 'str' (a string) and 'ending' (a substring).
function solution(str, ending) {
    // Check if 'str' ends with the specified 'ending'.
    if (str.endsWith(ending) == true) {
        // If the condition is true, return true.
        return true;
    } else {
        // If the condition is false, return false.
        return false;
    }
}