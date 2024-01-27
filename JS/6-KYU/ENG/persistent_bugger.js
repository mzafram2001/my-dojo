// NAME: Persistent Bugger
// AUTHOR: joh_pot
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Write a function, persistence, that takes in a positive 
// parameter num and returns its multiplicative persistence, which is 
// the number of times you must multiply the digits in num until you reach a single digit.
//
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
//
// Define a function named 'persistence' that takes a number 'num' as input.
function persistence(num) {
    // Initialize a variable 'times' to keep track of the number of iterations.
    var times = 0;
    // Convert the input number to a string to make it easier to manipulate its digits.
    num = num.toString();
    // Continue the loop until the length of the string representation of 'num' is 1.
    while (num.length > 1) {
        // Increment the 'times' variable to keep track of the number of iterations.
        times++;
        // Split the string into an array of characters, convert each character to a number,
        // then use the reduce method to multiply all the numbers in the array.
        num = num
            .split("")
            .map(Number)
            .reduce((a, b) => a * b)
            .toString();
    }
    // Return the final value of 'times', which represents the number of iterations.
    return times;
}