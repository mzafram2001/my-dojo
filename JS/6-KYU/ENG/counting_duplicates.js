// NAME: Counting Duplicates
// AUTHOR: kgashok
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//
// Define a function named duplicateCount that takes a text input as a parameter
function duplicateCount(text) {
    // Convert the input text to lowercase to make the comparison case-insensitive
    const lowerCaseInput = text.toLowerCase();
    // Create an empty object to store the frequency of each character in the lowercased input
    const charFrequency = {};
    // Initialize a variable to keep track of the count of duplicate characters
    let duplicates = 0;
    // Loop through each character in the lowercased input
    for (let char of lowerCaseInput) {
        // Check if the character is already present in charFrequency object
        if (charFrequency[char]) {
            // If the character is already present, increment its frequency
            charFrequency[char]++;
            // If the frequency becomes 2 (indicating the second occurrence), increment duplicates count
            if (charFrequency[char] === 2) {
                duplicates++;
            }
        } else {
            // If the character is not present in charFrequency, initialize its frequency to 1
            charFrequency[char] = 1;
        }
    }
    // Return the total count of duplicate characters
    return duplicates;
}