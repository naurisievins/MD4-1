// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const add = (a: number, b: number): number => a + b;

console.log(add(1,2)); //  3
console.log(add(1,10)); //  11
console.log(add(99,1)); //  100
console.log('') // Empty line

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

let type = (value: any) => typeof(value);

console.log(type(1)); // 'number'
console.log(type(false)); // 'boolean'
console.log(type({})); // 'object'
console.log(type(null)); // ''object'
console.log(type('string')); // 'string'
console.log(type(['array'])); // 'object'
console.log('') // Empty line

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

let isEqual = (a: any, b :any) => {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(isEqual(2 , 3)) // false
console.log(isEqual(3 , 3)) // true
console.log(isEqual(1 , '1')) // false
console.log(isEqual('10' , '10')) // true

// Task 4

