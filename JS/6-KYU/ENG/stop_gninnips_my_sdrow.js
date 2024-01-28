// NAME: Stop gninnipS My sdroW!
// AUTHOR: xDranik
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
//
// Define a function named spinWords that takes a string 's' as its parameter.
function spinWords(s) {
    // Split the input string into an array of words using a space as the delimiter.
    var splitString = s.split(" ");
    // Initialize an empty array to store the modified words.
    var joinArray = [];
    // Iterate through each word in the splitString array using forEach.
    splitString.forEach(element => {
        // Check if the length of the current word is greater than or equal to 5.
        if (element.length >= 5) {
            // If the condition is true, split the word into an array of characters.
            var splitElement = element.split("");
            // Reverse the order of the characters in the array.
            var reverseArray = splitElement.reverse();
            // Join the reversed array of characters to form the modified word.
            joinArray.push(reverseArray.join(""));
        } else {
            // If the length of the word is less than 5, add the original word to the array.
            joinArray.push(element);
        }
    });
    // Join the modified words array into a string using a space as the separator and return the result.
    return joinArray.join(" ");
}