// NAME: Does my number look big in this?
// AUTHOR: JulianNicholls
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// A Narcissistic Number (or Armstrong Number) is a positive number which 
// is the sum of its own digits, each raised to the power of the number of 
// digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
//
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon 
// whether the given number is a Narcissistic number in base 10.
//
// This may be True and False in your language, e.g. PHP.
// 
// Error checking for text strings or other invalid inputs is not required, only 
// valid positive non-zero integers will be passed into the function.
//
// Define a function called narcissistic that takes a single argument 'value'
function narcissistic(value) {
    // Convert the given number to a string and then split it into an array of digits
    return (
        // Map over each digit, calculate its power to the length of the array (number of digits),
        // and create a new array with these values
        value.toString().split("").map((v, i, arr) => Math.pow(arr[i], arr.length))
        // Calculate the sum of all the values in the array using reduce
        .reduce((a, b) => a + b, 0)
        // Check if the sum is equal to the original value
        === value
    );
}