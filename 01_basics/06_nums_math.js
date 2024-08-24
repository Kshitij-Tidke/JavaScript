const score = 400
// console.log(score); // 400 

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// toString()
// console.log(balance.toString()); // 100 
// console.log(typeof balance.toString()); // string

// toFixed()
// console.log(balance.toFixed(2)); // 100.00

// toPrecision(): Interview
// let otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); // 23.9
// otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); // 124
// console.log(otherNumber.toPrecision(4)); // 123.9

let hundreds = 100000
// console.log(hundreds.toLocaleString('en-In'));

// +++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math); // On browser

// console.log(Math.abs(-4)); // negative value postivive mai karne ke liye

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


