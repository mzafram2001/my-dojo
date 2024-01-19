// NAME: What is between?
// AUTHOR: sgwozdz
// LEVEL: 8 Kyu
//
// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and 
// return an array of all integers between the input parameters, including them.
//
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//
// Define a function named 'between' with two parameters 'a' and 'b'
function between(a, b) {
    // Initialize an empty array to store the range of values between 'a' and 'b'
    let arr = [];
    // Use a 'for' loop to iterate through values from 'a' to 'b' (inclusive)
    for (let i = a; i <= b; i++) {
        // Push each value to the 'arr' array
        arr.push(i);
    }
    // Return the array containing the range of values between 'a' and 'b'
    return arr;
}