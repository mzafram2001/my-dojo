// NAME: Highest Scoring Word
// AUTHOR: PG1
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.
// 
// Each letter of a word scores points according to its 
// position in the alphabet: a = 1, b = 2, c = 3 etc.
// 
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// 
// You need to return the highest scoring word as a string.
// 
// If two words score the same, return the word that appears earliest in the original string.
// 
// All letters will be lowercase and all inputs will be valid.
//
// Define a function named 'high' that takes a string 's' as its parameter.
function high(s) {
    // Split the input string 's' into an array of words using the space character as a delimiter.
    let as = s
        .split(" ")
        // For each word, convert it into an array of characters and then calculate the cumulative sum
        // of the ASCII values of each character minus 96 (to convert ASCII values to a 1-based alphabetical position).
        .map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    // Find the index of the maximum value in the array 'as'.
    // This will give the index of the word with the highest cumulative sum of ASCII values.
    // If there are multiple words with the same maximum value, the indexOf method will return the first occurrence.
    let maxIndex = as.indexOf(Math.max(...as));
    // Split the original string into an array of words and return the word at the calculated maxIndex.
    return s.split(" ")[maxIndex];
}