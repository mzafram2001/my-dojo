// NAME: Ones and Zeros
// AUTHOR: user4386369
// LEVEL: 7 Kyu
//
// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// 
// Examples:
// 
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
//
// Define a function called binaryArrayToNumber that takes an array (arr) as input
const binaryArrayToNumber = arr => {
    // Use the parseInt function to convert the binary array to a decimal number
    // The parseInt function takes two parameters: the string to be converted and the base of the numeral system
    // In this case, 'arr.join('')' joins the binary digits into a string, and the base is specified as 2 (binary)
    const decimalNumber = parseInt(arr.join(''), 2);
    // Return the resulting decimal number
    return decimalNumber;
};