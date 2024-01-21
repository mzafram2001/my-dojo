// NAME: Sum of Digits / Digital Root
// AUTHOR: user578387
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value 
// has more than one digit, continue reducing in this way until 
// a single-digit number is produced. The input will be a non-negative integer.
// 
// Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 -->  1 + 1 = 2
//
// Define a function named digital_root that takes a single parameter 'n'
function digital_root(n) {
    // Calculate the digital root using the formula: ((n - 1) % 9) + 1
    // This formula is derived from the property that the digital root of a number
    // is equivalent to the remainder of the number minus 1 when divided by 9, plus 1.
    
    // Explanation:
    // - Subtract 1 from 'n': This helps handle the case when 'n' itself is a multiple of 9.
    // - Take the remainder when divided by 9: This ensures the result is between 0 and 8.
    // - Add 1 to the result: This adjusts the range to be between 1 and 9 (inclusive).

    // Return the calculated digital root
    return ((n - 1) % 9) + 1;
}