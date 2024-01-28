// NAME: Find the missing letter
// AUTHOR: user5036852
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Write a method that takes an array of consecutive (increasing) letters 
// as input and that returns the missing letter in the array.
// 
// You will always get an valid array. And it will be always exactly 
// one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// 
// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
// 
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// 
// I have also created other katas. Take a look if you enjoyed this kata!
// 
// Define a function named findMissingLetter that takes an array as a parameter
function findMissingLetter(array) {
    // Use the find method to search for an element (character) in the array
    // where the difference between the charCodeAt() values of the current element and the next element is not equal to 1
    // This indicates that there is a missing letter in the sequence
    // The find method returns the first element that satisfies the condition
    return String.fromCharCode(
        // Retrieve the charCodeAt() value of the missing letter
        array
            .find((c, i) => array[i + 1].charCodeAt() - c.charCodeAt() !== 1)
            .charCodeAt() + 1
    );
    // The function returns the missing letter as a string
}
