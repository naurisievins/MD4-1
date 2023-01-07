// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const add = (a: number, b: number): number => a + b;

console.log('--- Task 1 ---'); // Task 1
console.log(add(1,2)); //  3
console.log(add(1,10)); //  11
console.log(add(99,1)); //  100
console.log(''); // Empty line

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const type = (value: any) => typeof(value);

console.log('--- Task 2 ---'); // Task 2
console.log(type(1)); // 'number'
console.log(type(false)); // 'boolean'
console.log(type({})); // 'object'
console.log(type(null)); // ''object'
console.log(type('string')); // 'string'
console.log(type(['array'])); // 'object'
console.log(''); // Empty line

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const isEqual = (a: any, b :any) => {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log('--- Task 3 ---'); // Task 3
console.log(isEqual(2 , 3)); // false
console.log(isEqual(3 , 3)); // true
console.log(isEqual(1 , '1')); // false
console.log(isEqual('10' , '10')); // true
console.log(''); // Empty line

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const nthChar = (a: string, n: number): string => a.charAt(n-1);

console.log('--- Task 4 ---'); // Task 4
console.log(nthChar('abcd',1)); // 'a'
console.log(nthChar('zyxbwpl',5)); // 'w'
console.log(nthChar('gfedcba',3)); // 'e'
console.log(''); // Empty line

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirstThree = (a: string): string => a.slice(3);

console.log('--- Task 5 ---'); // Task 5
console.log(removeFirstThree('abcdefg')); // 'defg'
console.log(removeFirstThree('1234')); // '4'
console.log(removeFirstThree('fgedcba')); // 'dcba'
console.log(''); // Empty line

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const extractLastThree = (a: string): string => a.slice(-3);

console.log('--- Task 6 ---'); // Task 6
console.log(extractLastThree('abcdefg')) // 'efg'
console.log(extractLastThree('1234')) // '234'
console.log(extractLastThree('fgedcba')) // 'cba'
console.log(''); // Empty line

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const getFirstThree = (a: string): string => a.slice(0, 3);

console.log('--- Task 7 ---'); // Task 7
console.log(getFirstThree('abcdefg')) // 'abc'
console.log(getFirstThree('1234')) // '123'
console.log(getFirstThree('fgedcba')) // 'fge'
console.log(''); // Empty line

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const firstHalfOfString = (a: string): string => a.slice(0, (a.length/2));

console.log('--- Task 8 ---'); // Task 8
console.log(firstHalfOfString('abcdefgh')) // 'abcd'
console.log(firstHalfOfString('1234')) // '12'
console.log(firstHalfOfString('gedcba')) // 'ged'
console.log(''); // Empty line

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThree = (a: string): string => a.slice(0, (a.length-3));

console.log('--- Task 9 ---'); // Task 9
console.log(removeLastThree('abcdefg')) // 'abcd'
console.log(removeLastThree('1234')) // '1'
console.log(removeLastThree('fgedcba')) // 'fged'
console.log(''); // Empty line

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const bPercentOfA = (a: number, b: number): number => a*b/100;

console.log('--- Task 10 ---'); // Task 10
console.log(bPercentOfA(100,50)) // 50
console.log(bPercentOfA(10,1)) // 0.1
console.log(bPercentOfA(500,25)) // 125
console.log(''); // Empty line

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const SixValueFormula = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return ((a+b-c)*d/e)**f;
}

console.log('--- Task 11 ---'); // Task 11
console.log(SixValueFormula(6,5,4,3,2,1)) // 10.5
console.log(SixValueFormula(6,2,1,4,2,3)) // 2744
console.log(SixValueFormula(2,3,6,4,2,3)) // -8
console.log(''); // Empty line

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (a: number): boolean => a % 2 == 0 ? true : false;

console.log('--- Task 12 ---'); // Task 12
console.log(isEven(10)) // true
console.log(isEven(-4)) // true
console.log(isEven(5)) // false
console.log(isEven(-111)) // false
console.log(''); // Empty line

// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const countOccurrences = (a: string, b: string): number => b.split(a).length-1;

console.log('--- Task 13 ---'); // Task 13
console.log(countOccurrences('m', 'how many times does the character occur in this sentence?')) // 2
console.log(countOccurrences('h', 'how many times does the character occur in this sentence?')) // 4
console.log(countOccurrences('?', 'how many times does the character occur in this sentence?')) // 1
console.log(countOccurrences('z', 'how many times does the character occur in this sentence?')) // 0
console.log(''); // Empty line

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = (a: number): boolean => a % 1 === 0 ? true : false;

console.log('--- Task 14 ---'); // Task 14
console.log(wholeNumber(4)) // true
console.log(wholeNumber(1.123)) // false
console.log(wholeNumber(1048)) // true
console.log(wholeNumber(10.48)) // false
console.log(''); // Empty line


// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const divideOrMultiply = (a: number, b: number): number => a < b ? a / b : a * b;

console.log('--- Task 15 ---'); // Task 15
console.log(divideOrMultiply(10, 100)) // 0.1
console.log(divideOrMultiply(90, 45)) // 4050
console.log(divideOrMultiply(8, 20)) // 0.4
console.log(divideOrMultiply(2, 0.5)) // 1
console.log(''); // Empty line

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const append = (a: string, b: string): string => a.includes(b) ? b + a : a + b;

console.log('--- Task 16 ---'); // Task 16
console.log(append('cheese', 'cake')) // 'cheesecake'
console.log(append('lips', 's')) // 'slips'
console.log(append('Java', 'script')) // 'Javascript'
console.log(append(' think, therefore I am', 'I')) // 'I think, therefore I am'
console.log(''); // Empty line

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundToSecond = (a: number): number => Math.round(a *100) / 100;

console.log('--- Task 17 ---'); // Task 17
console.log(roundToSecond(2.12397)) // 2.12
console.log(roundToSecond(3.136)) // 3.14
console.log(roundToSecond(1.12397)) // 1.12
console.log(roundToSecond(26.1379)) // 26.14
console.log(''); // Empty line

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const splitInDigits = (a: number): number[] => String(a).split('').map(Number);

console.log('--- Task 18 ---'); // Task 18
console.log(splitInDigits(10)) // [1,0]
console.log(splitInDigits(931)) // [9,3,1]
console.log(splitInDigits(193278)) // [1,9,3,2,7,8]
console.log(''); // Empty line

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const clearAndSort = (a: string, b: string): string => {
    const clearString = (c: string): string => c.replace("%","");
    const reverseString = (d: string): string => {
        const splitString: string[] = d.split('');
        const reverseArray: string[] = splitString.reverse();
        const reverseString: string = reverseArray.join('');
        return reverseString;
    }
    return clearString(a) + clearString(reverseString(b));
}

console.log('--- Task 19 ---'); // Task 19
console.log(clearAndSort('java', 'tpi%rcs')); // 'Javascript'
console.log(clearAndSort('c%ountry', 'edis')); // 'Countryside'
console.log(clearAndSort('down', 'nw%ot')); // // 'Downtown'
console.log(''); // Empty line

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const primeNumber = (a: number): number => {
    let x: number;
    const findPrime = (y: number): number => {
        for (let i = 2; i < y; i++) {
            if  (y % i === 0) {
                y++;
                x = y;
                findPrime(y);
                break;
            } else if (i == y-1) {
                x = y;
            }           
        }
        return x;
    }
    return findPrime(a);
}

console.log('--- Task 20 ---'); // Task 20
console.log(primeNumber(38)) // 41
console.log(primeNumber(7)) // 7
console.log(primeNumber(115)) // 127
console.log(primeNumber(2000)) // 2003
console.log(''); // Empty line

// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisible = (x: number, y: number): number => {
    if (x % y == 0) {
        return x;
    } else {
        x++
        for (let i = 1; x <= x+y; i++) {
            if (x % y == 0) {
                return x;
             } else {
                x++;
             }
        }
    }
}

console.log('--- Task 21 ---'); // Task 21
console.log(isDivisible(1, 23)) // 23
console.log(isDivisible(23, 23)) // 23
console.log(isDivisible(7, 3)) // 9
console.log(isDivisible(-5, 7)) // 0
console.log(''); // Empty line

// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertDivider = (a: string, b: string): string => {
    const toReverse = (x: string): string => {
        return x.split('').reverse().join('');
    }
    return  toReverse(toReverse(a).replace(/.{3}/g, '$&' + b));
}

console.log('--- Task 22 ---'); // Task 22
console.log(insertDivider('1234567','.')) // '1.234.567'
console.log(insertDivider('abcde','$')) // 'ab$cde'
console.log(insertDivider('zxyzxyzxyzxyzxyz','w')) // 'zwxyzwxyzwxyzwxyzwxyz'
console.log(''); // Empty line

// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const IncrementString = (a: string): string => {
    let IncrementedString: string = '';
    for (let i = 0; i < a.length; i++) {
        IncrementedString += String.fromCharCode(a[i].charCodeAt(0) + 1);
    }
    return IncrementedString;
}

console.log('--- Task 23 ---'); // Task 23
console.log(IncrementString('bnchmf')) // 'coding'
console.log(IncrementString('bgddrd')) // 'cheese'
console.log(IncrementString('sdrshmf')) // 'testing'
console.log(''); // Empty line

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const returnFromArray = (a:number[], n: number): number => a[n-1];

console.log('--- Task 24 ---'); // Task 24
console.log(returnFromArray([1,2,3,4,5],3)) // 3
console.log(returnFromArray([10,9,8,7,6],5)) // 6
console.log(returnFromArray([7,2,1,6,3],1)) // 7
console.log(''); // Empty line

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThreeOfArray = (a: number[]): number[] => a.slice(3);

console.log('--- Task 25 ---'); // Task 25
console.log(removeFirstThreeOfArray([1,2,3,4])) // [4]
console.log(removeFirstThreeOfArray([5,4,3,2,1,0])) // [2,1,0]
console.log(removeFirstThreeOfArray([99,1,1])) // []
console.log(''); // Empty line

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractLastThreeOfArray = (a: number[]): number[] => a.slice(-3);

console.log('--- Task 26 ---'); // Task 26
console.log(extractLastThreeOfArray([1,2,3,4])) // [2,3,4]
console.log(extractLastThreeOfArray([5,4,3,2,1,0])) // [2,1,0]
console.log(extractLastThreeOfArray([99,1,1])) // [99,1,1]
console.log(''); // Empty line

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractFirstThreeOfArray = (a: number[]): number[] => a.slice(0, 3);

console.log('--- Task 27 ---'); // Task 27
console.log(extractFirstThreeOfArray([1,2,3,4])) // [1,2,3]
console.log(extractFirstThreeOfArray([5,4,3,2,1,0])) // [5,4,3]
console.log(extractFirstThreeOfArray([99,1,1])) // [99,1,1]
console.log(''); // Empty line

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const returnLastNFromArray = (a: number[], n: number): number[] => a.slice(a.length-n);

console.log('--- Task 28 ---'); // Task 28
console.log(returnLastNFromArray([1, 2, 3, 4, 5], 2)) // [ 4, 5 ]
console.log(returnLastNFromArray([1, 2, 3], 6)) // [ 1, 2, 3 ]
console.log(returnLastNFromArray([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [ 6, 7, 8 ]
console.log(''); // Empty line

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const filterArray = (a: any[], b: any): any[] => a.filter(element => element !== b);

console.log('--- Task 29 ---'); // Task 29
console.log(filterArray([1,2,3], 2)) // [1, 3]
console.log(filterArray([1,2,'2'], '2')) // [1, 2]
console.log(filterArray([false,'2',1], false)) // ['2', 1]
console.log(filterArray([1,2,'2',1], 1)) // [2, '2']
console.log(''); // Empty line

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrayLength = (a: number[]): number => a.length;

console.log('--- Task 30 ---'); // Task 30
console.log(arrayLength([1,2,2,4])) // 4
console.log(arrayLength([9,9,9]))// 3
console.log(arrayLength([4,3,2,1,0])) // 5
console.log(''); // Empty line

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const returnNegativeValues = (a: number[]): number => {
    let counter: number = 0;
    a.forEach(element => {
        if (element < 0) {
            counter++
        }
    });
    return counter;
}

console.log('--- Task 31 ---'); // Task 31
console.log(returnNegativeValues([1,-2,2,-4])) // 2
console.log(returnNegativeValues([0,9,1])) // 0
console.log(returnNegativeValues([4,-3,2,1,0])) // 1
console.log(''); // Empty line

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const descendingOrder = (a: number[]): number[] => {
    return a.sort(function(a, b){return b-a});
}

console.log('--- Task 32 ---'); // Task 32
console.log(descendingOrder([1,3,2])) // [3,2,1]
console.log(descendingOrder([4,2,3,1])) // [4,3,2,1]
console.log(''); // Empty line

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortAlphabetically = (a: string[]): string[] => {
    return a.sort();
}

console.log('--- Task 33 ---'); // Task 33
console.log(sortAlphabetically(['b', 'c', 'd', 'a'])) // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])) // ['a', 'a', 'c', 'd', 'w', 'y', 'z']
console.log(''); // Empty line

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNumber = (a: number[]): number => {
    return a.reduce((a, b) => a + b, 0)/a.length;
}

console.log('--- Task 34 ---'); // Task 34
console.log(averageNumber([10,100,40])) // 50
console.log(averageNumber([10,100,1000])) // 370
console.log(averageNumber([-50,0,50,200])) // 50
console.log(''); // Empty line

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (a: string[]): string => {
    let longest: string = a[0];
    a.forEach(element => {
        if (element.length > longest.length) {
            longest = element;
        }
    });
    return longest;
}

console.log('--- Task 35 ---'); // Task 35
console.log(longestString(['help', 'me'])) // 'help'
console.log(longestString(['I', 'need', 'candy'])) // 'candy'
console.log(''); // Empty line

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const equalElements = (a: any[]): boolean => {
    let arrayElement: string = a[0];
    let isEqual: boolean = true;
    a.forEach(element => {
        if (arrayElement !== element) {
            isEqual = false;
        }
    });
    return isEqual;
}

console.log('--- Task 36 ---'); // Task 36
console.log(equalElements([true, true, true, true])) // true
console.log(equalElements(['test', 'test', 'test'])) // true
console.log(equalElements([1,1,1,2])) // false
console.log(equalElements(['10',10,10,10])) // false
console.log(''); // Empty line

// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const mergeArrays = function(...a: any[]): any[] {
    let string: string = a.join(',');
    return string.split(',');
}

console.log('--- Task 37 ---'); // Task 37
console.log(mergeArrays([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6])) // ['a', 'b', 'c', 4, 5, 6]
console.log(mergeArrays([true, true], [1, 2], ['a', 'b'])) // [true, true, 1, 2, 'a', 'b']
console.log(''); // Empty line

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const arrayOfObjects = (a: any[]): any[] => {
    let sortedArray = a.sort((obj1: {b: number}, obj2: {b: number}) =>
    (obj1.b > obj2.b) ? 1 : (obj1.b < obj2.b) ? -1 : 0);
    return sortedArray;
}

console.log('--- Task 38 ---'); // Task 38
console.log(arrayOfObjects([{a:1,b:2},{a:5,b:4}])) // [{a:1,b:2},{a:5,b:4}]
console.log(arrayOfObjects([{a:2,b:10},{a:5,b:4}])) // [{a:5,b:4},{a:2,b:10}]
console.log(arrayOfObjects([{a:1,b:7},{a:2,b:1}])) // [{a:2,b:1},{a:1,b:7}]
console.log(''); // Empty line

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const twoArrays = (a: number[], b: number[]) => {
    let newArray = a.concat(b).sort((a, b) => (a-b));
    return newArray = [...new Set(newArray)];
}

console.log('--- Task 39 ---'); // Task 39
console.log(twoArrays([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(twoArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41,  42, 333]
console.log(''); // Empty line

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumElementsGreaterThan = (a: number[], b: number): number => {
    let counter: number = 0;
    a.forEach(element => {
        if (element > b) {
            counter += element;
        }
    });
    return counter;
}

console.log('--- Task 40 ---'); // Task 40
console.log(sumElementsGreaterThan([1, 2, 3, 4, 5, 6, 7], 2)) // 25
console.log(sumElementsGreaterThan([-10, -11, -3, 1, -4], -3)) // 1
console.log(sumElementsGreaterThan([78, 99, 100, 101, 401], 99)) // 602
console.log(''); // Empty line

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const minMaxArray = (min: number, max: number): number[] => {
    let newArray: number[] = [];
     for (min; min <= max; min++) {
            newArray.push(min);
     }
    return newArray;
}

console.log('--- Task 41 ---'); // Task 41
console.log(minMaxArray(2, 10)) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minMaxArray(1, 3)) // [1, 2, 3]
console.log(minMaxArray(-5, 5)) // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(minMaxArray(2, 7)) // [2, 3, 4, 5, 6, 7]
console.log(''); // Empty line

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupStrings = (a: string[]): { [key: string]: string [] } => {
     let newObject: { [key: string]: string [] } = {};
    for (let i = 0; i < a.length; i++) {
        let currentWord: string = a[i];
        let firstChar: string = currentWord[0].toLocaleLowerCase();
        let newArray: string[] = [];
        if (newObject[firstChar] === undefined) {
            newArray.push(currentWord);
            newObject[firstChar] = newArray;
        } else {
            newObject[firstChar].push(currentWord);
        }
    }
    return newObject;
}

console.log('--- Task 42 ---'); // Task 42
console.log(groupStrings(['Alf', 'Alice', 'Ben'])) // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupStrings(['Ant', 'Bear', 'Bird'])) // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupStrings(['Berlin', 'Paris', 'Prague'])) // { b: ['Berlin'], p: ['Paris', 'Prague']}
console.log(''); // Empty line

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const addFirstToArray = (a: any[], b: number): any[] => {
    let arrayCopy: any[] = [...a];
    b < 6 ? arrayCopy.unshift(0) : arrayCopy.unshift(b);
    return arrayCopy;
}

console.log('--- Task 43 ---'); // Task 43
console.log(addFirstToArray([1,2,3], 6)) // [6,1,2,3]
console.log(addFirstToArray(['a','b'], 2)) // [0,'a','b']
console.log(addFirstToArray([null,false], 11)) // [11,null,false]
console.log(''); // Empty line

// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const nthElementInNewArray = (a: number[], b: number): number[] => {
    let newLength: number = Math.floor(a.length / b);
    let newArray: number[] = [];
    for (let i = 1; i <= newLength; i++) {
        if (newArray.length <= newLength) {
            newArray.push(a[i*b-1]);
        }
    }
    return newArray;
}

console.log('--- Task 44 ---'); // Task 44
console.log(nthElementInNewArray([1,2,3,4,5,6,7,8,9,10],3)) // [3,6,9]
console.log(nthElementInNewArray([10,9,8,7,6,5,4,3,2,1],5)) // [6,1]
console.log(nthElementInNewArray([7,2,1,6,3,4,5,8,9,10],2)) // // [2,6,4,8,10]
console.log(''); // Empty line

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const ObjectReturnProp = (a: { continent: string, country: string}): string => a.country;

console.log('--- Task 45 ---'); // Task 45
console.log(ObjectReturnProp({  continent: 'Asia',  country: 'Japan'})) // 'Japan'
console.log(ObjectReturnProp({  country: 'Sweden',  continent: 'Europe'})) // 'Sweden'
console.log(''); // Empty line

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const ObjectReturnProp2 = (a: {[key: string]: string | number}): string | number => a['prop-2'];

console.log('--- Task 46 ---'); // Task 46
console.log(ObjectReturnProp2({  one: 1,  'prop-2': 2})) // 2
console.log(ObjectReturnProp2({  'prop-2': 'two',  prop: 'test'})) // 'two'
console.log(''); // Empty line

// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const returnfromObject = (a: {[key: string]: string }, b: string): string => a[b];

console.log('--- Task 47 ---'); // Task 47
console.log(returnfromObject({  continent: 'Asia',  country: 'Japan'}, 'continent')) // 'Asia'
console.log(returnfromObject({  country: 'Sweden',  continent: 'Europe'}, 'country')) // 'Sweden'
console.log(''); // Empty line

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const ObjHasProperty = (a: {[key: string]: string | number}, b: string): boolean => {
    return a[b] === undefined ? false : true;
}

console.log('--- Task 48 ---'); // Task 48
console.log(ObjHasProperty({a:1,b:2,c:3},'b')) // true
console.log(ObjHasProperty({x:'a',y:'b',z:'c'},'a')) // false
console.log(ObjHasProperty({x:'a',y:'b',z:'c'},'z')) // true
console.log(''); // Empty line

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const creatObject = (a: string): {[key: string]: string} => {
    let newObject: {[key: string]: string} = {}; //
    newObject['key']=a;
    return newObject;
}

console.log('--- Task 49 ---'); // Task 49
console.log(creatObject('a')) // {key:'a'}
console.log(creatObject('z')) // {key:'z'}
console.log(creatObject('b')) // {key:'b'}
console.log(''); // Empty line

// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const creatObject2 = (a: string, b: string): {[key: string]: string} => {
    let newObject: {[key: string]: string} = {}; //
    newObject[a]=b;
    return newObject;
}

console.log('--- Task 50 ---'); // Task 50
console.log(creatObject2('a','b')) // {a:'b'}
console.log(creatObject2('z','x')) // {z:'x'}
console.log(creatObject2('b','w')) // {b:'w'}
console.log(''); // Empty line

// Task 51


console.log('--- Task 51 ---'); // Task 51

console.log(''); // Empty line

