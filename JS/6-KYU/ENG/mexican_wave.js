// NAME: Mexican Wave
// AUTHOR: adrian.eyre
// LEVEL: 6 Kyu
//
// DESCRIPTION:
// The wave (known as the Mexican wave in the English-speaking world 
// outside North America) is an example of metachronal rhythm achieved in a 
// packed stadium when successive groups of spectators briefly stand, yell, 
// and raise their arms. Immediately upon stretching to full height, the 
// spectator returns to the usual seated position.
// 
// The result is a wave of standing spectators that travels through the crowd, 
// even though individual spectators never move away from their seats. In many large 
// arenas the crowd is seated in a contiguous circuit all the way around the sport 
// field, and so the wave is able to travel continuously around the arena; in 
// discontiguous seating arrangements, the wave can instead reflect back and forth 
// through the crowd. When the gap in seating is narrow, the wave can sometimes 
// pass through it. Usually only one wave crest will be present at any given time 
// in an arena, although simultaneous, counter-rotating waves have been produced.
// 
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter 
// is a person standing up. 
// 
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// 
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// 
// Function to create a "wave" pattern from a given string
function wave(str) {
    // Initialize an empty array to store the result
    let result = [];
    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a space, if so, skip to the next iteration
        if (str[i] === ' ') {
            continue;
        }
        // Capitalize the current character and create a new string with the modified character
        // Append it to the result array
        result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
    // Return the final array representing the "wave" pattern
    return result;
}