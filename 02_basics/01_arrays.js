// () => parentheses  
// [] => square brackets
// {} => curly brackets

// Array is object, as with arrays in other programming languages,
//    - It enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
//    - It is non-Primitive type data structure
//    - JavaScript arrays are resizable and can contain a mix of different data types. [1, "a", true]
//    - JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// means that you can access it like 
    // myarr[0] // allowed
    // myarr["string"] // not allowed
    // myarr[-1] // not allowed
//    - JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on
//    - JavaScript array-copy operations create shallow copies. 

// shallow copies: Call by reference. also change in original value.
// Deep copies: Call by value. give duplicate of datatype and it does not effect the original value.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);

// Array methods
myArr.push(6)  // add value to the end
myArr.pop() // remove the last/end value

myArr.unshift(0) // add value to the start
// It insert value add the start but there is a problem. The problem is that we need to shift all the value. If my array contains more value then this is time consuming operations.
myArr.shift() // remove first element from  array.

// Questionable: We ask the question 
const newArr = [1, 2, 3, 4, 5]
// console.log(newArr.includes(9)); //false // true
// console.log(newArr.indexOf(9)); // -1 not found
// console.log(newArr.indexOf(3)); // 2 // return a index 4 at this case index is 2.

// const aarr = newArr.join() // when we join it covert it into string
// console.log(typeof aarr); // string
// console.log(newArr);

// slice, splice interview
console.log("A ", newArr);
const myn1 = newArr.slice(1, 3)
console.log(myn1);
console.log("B ",newArr);
const myn2 = newArr.splice(1,3) // Splice manipulate actual array.
console.log(myn2);
console.log(newArr);









