// 9) Write a function to reverse a string. the function should take a single argument, which is the string to reverse.
// The answer is below:

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));   // "olleh"
console.log(reverseString("world"));   // "dlrow"