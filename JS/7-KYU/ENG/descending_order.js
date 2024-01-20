// NAME: Descending Order
// AUTHOR: TastyOs
// LEVEL: 7 Kyu
//
// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
//
// Examples::
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
//
// Define a function named descendingOrder that takes a single parameter 'n'
function descendingOrder(n) {
    // Convert the number 'n' to an array of its digits using Array.from and String, then convert each digit back to a number
    const digits = Array.from(String(n), Number);
    // Sort the array of digits in descending order using the sort method and a custom compare function
    const sortedDigits = digits.sort((a, b) => b - a);
    // Convert the sorted array of digits back to a number by joining them as a string and then parsing it as an integer
    const result = parseInt(sortedDigits.join(''));
    // Return the final result, which is the input number 'n' with its digits rearranged in descending order
    return result;
}