// NAME: Array.diff
// AUTHOR: marcinbunsch
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which 
// subtracts one list from another and returns the result.
// 
// It should remove all values from list a, which are present in list b keeping their order.
// 
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// 
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// 
// Define a function named 'array_diff' that takes two arrays as parameters, 'a' and 'b'
function array_diff(a, b) {
    // Use the 'filter' method on array 'a'
    // For each element 'e' in array 'a', only keep the elements for which the condition inside the arrow function is true
    // The condition checks if the current element 'e' is NOT included in array 'b'
    // So, the resulting array will only contain elements from 'a' that are not present in 'b'
    return a.filter(e => !b.includes(e));
}