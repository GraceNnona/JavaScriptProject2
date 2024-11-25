//String Manipulation Functions:

//Reverse a String:

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); 

//Count Characters:

function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello")); 
//Capitalize Words:

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalizeWords("hello world")); 
// Array Functions:

// Find Maximum and Minimum:

function findMaximum(arr) {
    return Math.max(...arr);
}
function findMinimum(arr) {
    return Math.min(...arr);
}
console.log(findMaximum([1, 2, 3, 4, 5])); 
console.log(findMinimum([1, 2, 3, 4, 5])); 

// Sum of Array:

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 

// Filter Array:
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); 

// Mathematical Functions:

// Factorial:

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// Prime Number Check:

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(4)); 

//Fibonacci Sequence:

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(5)); 
