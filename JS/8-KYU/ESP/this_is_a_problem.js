// NAME: "this" is a problem
// AUTHOR: priyankaherur
// LEVEL: 8 Kyu
//
// DESCRIPTION:
// We want to create a constructor function 'NameMe', which takes first 
// name and last name as parameters. The function combines the first and 
// last names and saves the value in "name" property.
// 
// We already implemented that function, but when we actually run the code, 
// the "name" property is accessible, but the "firstName" and "lastName" 
// is not accessible. All the properties should be accessible. Can you 
// find what's wrong with it? A test fixture is also available
//
// Define a function named NameMe that takes two parameters: first and last
function NameMe(first, last) {
    // Create an object and assign the 'first' parameter to the firstName property
    // and the 'last' parameter to the lastName property
    this.firstName = first;
    this.lastName = last;
    // Return an object with a 'name' property that contains the full name
    return { name: this.firstName + ' ' + this.lastName };
}