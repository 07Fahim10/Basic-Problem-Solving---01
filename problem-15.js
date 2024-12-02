//5) Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
// The answer is below:

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let vowelCharacter of str) {
        if (vowels.includes(vowelCharacter)) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("hello world"));   // 3
console.log(countVowels("Javascript"));   // 3