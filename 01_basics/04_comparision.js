// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// It automatically predit that 2 is a number but it don't give you preditable result
// console.log("2" > 1);
// console.log("02" > 1);

// TypeScript don't allow to check that to compare two different data types.

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
// It create some confusion 
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === 
console.log("2" === 2); //false