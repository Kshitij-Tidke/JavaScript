// DataTypes: How we store the data and How we access the data that basic the two type are create
//     - Premitive DataTypes
//     - Non-Premitive DataTypes

// Primitive: 
// Call by value: When you pass primitive data types using call by value, the function receives a copy of the data rather than the original value. This means any changes made to the data within the function do not affect the original variable.
    // - String
    // - Number 
    // - Boolean
    // - Null: It represent empty. not 0, undefined, ""
    // - undefined: Variable is declare. Memory space is declare. We can not assign any value to that variable.
    // - Symbol - We use symbol beacuse we want to show that this value is unique.
    // - BigInt - It is used for big value like scintific value, stock market

// Non-Premitive DataTypes:
// Reference Type: When you pass reference types (like objects or arrays) to a function, the function receives a reference to the original data, not a copy. This means changes made to the data within the function will affect the original object or array outside the function.

    // - Array
    // - Objects
    // - Functions

// JavaScript is statically type or dynamically type language.
// JavaScript is a dynamically typed language. This means that variables in JavaScript do not have a fixed type, and their types can change at runtime. You do not need to declare the type of a variable when you create it, and you can assign different types of values to the same variable over its lifetime.

// TypeScript is a statically typed language. It extends JavaScript by adding optional static types, which means you can define the types of variables, function parameters, and return values at compile time. This allows TypeScript to catch type-related errors during development, before the code is executed.
// let x: number = 10; // x is explicitly a number

// In JavaScript, there is no distinction between integers and floating-point numbers; both are treated as the same type, called number.

// Symbol: 
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);
// It all way give false

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)
let myYoutubename= "ChaiAurCode"
let anothername = myYoutubename
anothername = "ChaiAurReact"
console.log(anothername);
console.log(myYoutubename);

// Heap (Non-Primitive)
const userOne = {
    email: "user@user.com",
    upi: "user@ybl"
}
const userTwo = userOne
userTwo.email = "user@google.com"
console.log(userOne);
console.log(userTwo);


