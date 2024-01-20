// NAME: List Filtering
// AUTHOR: cmgerber
// LEVEL: 7 Kyu
//
// DESCRIPTION:
// In this kata you will create a function that takes a list of 
// non-negative integers and strings and returns a new list with the strings filtered out.
//
// Example:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//
// Define a function named filter_list that takes an array as its parameter
function filter_list(list) {
    // Declare a new empty array to store the filtered elements
    let newList = [];
    // Iterate over each element of the input array using a for loop
    for (let i = 0; i <= list.length; i++) {
        // Check if the current element is a number
        if (!isNaN(list[i]) && typeof list[i] == "number") {
            // If the element is a number, add it to the newList array
            newList.push(list[i]);
        }
    }
    // Print the filtered array to the console
    console.log(newList);
    // Return the filtered array
    return newList;
}