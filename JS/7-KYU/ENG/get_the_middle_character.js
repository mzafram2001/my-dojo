// NAME: Get the Middle Character
// AUTHOR: Shivo
// LEVEL: 7 Kyu
//
// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle 
// character of the word. If the word's length is odd, return the 
// middle character. If the word's length is even, return the middle 2 characters.
//
// Examples::
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
//
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly 
// more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. 
// This is only here to tell you that you do not need to worry about your solution timing out.
// 
// #Output
// The middle character(s) of the word represented as a string.
//
// Define a function named getMiddle that takes a string 's' as a parameter.
function getMiddle(s) {
    // Declare variables to check if the length of the string is even or odd.
    var odd, even = false;
    // Declare a variable to store the result.
    var res = "";
    // Check if the length of the string is even.
    if (s.length % 2 === 0) {
        even = true; // Set the even variable to true.
    } else {
        odd = true; // Set the odd variable to true.
    }
    // Check if the length is even.
    if (even) {
        // If even, concatenate the middle two characters and store them in the result variable.
        res = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        // If odd, get the middle character and store it in the result variable.
        res = s[Math.floor(s.length / 2)];
    }
    // Return the result.
    return res;
}