// NAME: Which are in?
// AUTHOR: g964
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted 
// array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// 
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// 
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []
// 
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.
//
// Define a function named inArray that takes two arrays as parameters: array1 and array2
function inArray(array1, array2) {
    // Initialize an empty array to store the common elements
    var r = [];
    // Loop through each element in array2
    for (let i = 0; i < array2.length; i++) {
        // For each element in array2, loop through each element in array1
        for (let j = 0; j < array1.length; j++) {
            // Check if the current element in array2 includes the current element in array1
            // and also check if the element is not already in the result array (r)
            if (array2[i].includes(array1[j]) == true && !r.includes(array1[j])) {
                // If both conditions are met, add the element to the result array (r)
                r.push(array1[j]);
            }
        }
    }
    // Sort the result array in lexicographical order and return it
    return r.sort();
}