// In JavaScript, strings can be denoted using either double quotes ("") or single quotes (''), and there is no functional difference between the two.

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // It is outdated 
// String interpolation is a feature that allows you to embed expressions or variables within a string, making it easier to construct strings dynamically. In JavaScript, this is achieved using template literals, which are enclosed in backticks (`) and support embedded expressions inside ${} placeholders.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') // another way to declare string. We use Object to declare the string.
// Output: String {'hitesh-hc-com'} // It this time string is a Object

// console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}. Use browser for this


// console.log(gameName.length);
// It does not change the Original value.
// console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));