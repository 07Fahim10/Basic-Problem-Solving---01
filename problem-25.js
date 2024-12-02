//15) Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
// The answer is below:


function sumArray(arr) {
    return arr.reduce((array1, array2) => array1 + array2, 0);
}

console.log(sumArray([1, 2, 3, 4]));   // 10
console.log(sumArray([-1, -2, -3, -4]));   // -10
console.log(sumArray([1.5, 2.5, 3.5]));   // 7.5