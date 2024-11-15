// PRIMITIVE DATATYPES ------------------------------>

// string 
let name = 'praveen lodhi'
let collegeName = "DJ Sanghvi College of Engineering"

// numbers
let age = 21
let pi = 3.14

// bigInt - we add 'n' in the last to represent that datatype is bigInt
let bigNumber = 123456789012345678901234567890n;

// boolean
let isLoggedIn = true
let isEmpty = false

//Undefined - A variable that has been declared but not assigned a value.
let x;
console.log('');
console.log(`Line 20 --- The value of 'x' is ` + x);

// null - It represent that value is intentionally not given to variable
//        - typeof 'null' is 'Object'
let percentile = null
console.log(`Line 25 --- Typeof 'null' is ` + typeof percentile);

// symbol - It represents a unique identifier, often used as keys in objects.
let id = Symbol("id");



// REFERENCE DATATYPES ------------------------------>

// object - A collection of key-value pairs, it includes plain objects, arrays, functions, and more.
let user = { name: "Praveen", age: 21 };
let config = {
    isDarkMode: true,
    languages: ["JavaScript", "TypeScript"],
};

console.table('Line 41: Representing `user` in Table Format: ')
console.table([user])
console.log('')

// array - A special type of object used for ordered collections.
let numbers = [1, 2, 3, 4];
let fruits = ["apple", "banana"];

console.log(`Line 48 --- Fruits: ` + fruits);
console.log(`Line 49 --- Numbers: ` + numbers);

// function - A reusable block of code. Functions themselves are objects in JavaScript.
{
    let name = 'Praveen Lodhi'
    function greet(name) {
        return `Hello, ${name}`;
    }
    console.log(`Line 57 --- Greeting: ` + greet(name)); 
}

//date - Used for working with dates and times.
let today = new Date();
console.log(`Line 62 --- ` + today)

// regexp - Represents regular expressions for pattern matching.
let pattern = /[A-Za-z]+/;

// set - A collection of unique values
let uniqueNumbers = new Set([1, 2, 2, 3]);
console.log('')
console.log('Line 69 --------------------------------------');
console.log(uniqueNumbers);

// map - A collection of key-value pairs where keys can be of any type.
let userMap = new Map();
userMap.set("id", 101);
console.log('')
console.log('Line 74 --------------------------------------');
console.log('User Map: ', userMap);
console.log('');


