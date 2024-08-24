console.log("Kshitij");

const stringOne = new String("A String object");
console.log(stringOne); //[String: 'A String object']
console.log(typeof stringOne); // Object

// constructor: It create String objects. When called as a function, it returns primitive values of type String.
// new String(thing) // Anything to be converted to a string as parameter.

// Static methods 
// 1) String.fromCharCode(): It is static method returns a string created from the specified sequence of UTF-16 code units.
// console.log(String.fromCharCode(189, 43, 190, 61)); //"½+¾="

// 2) String.fromCodePoint(): It is static method returns a string created from the specified sequence of code points.
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804)); // "☃★♲你"

// 3) String.raw()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw

// Methods: 
// 1) at(): It is an String method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
// const str1 = "Hello, I am Kshitij"
// console.log(str1.at(4)) // o   // It starts with 0 index.
// console.log(str1.at(-4)) // i  // In negative value It start with backside with 1 index.

// 2) charAt(): It is an String method returns a new string consisting of the single UTF-16 code unit at the given index.
// Difference is that charAt() not work on negative index.

// 3) charCodeAt(): It is an String method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// const str1 = "Hello, I am Kshitij"
// console.log(str1.charCodeAt(4)) // returns an integer between 0 and 65535 

// 4) codePointAt(): It is a String method returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
// const icons = '☃★♲';
// console.log(icons.codePointAt(1)); // 9733

// 5) concat(): It is use to join two string and returns a new string.

// 6) endsWith(): Determines whether a string ends with the characters of this string, returning true or false as appropriate.

// 7) includes(): It performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
// Case Sensitive means fox === fox is true and fox === Fox is false

// 8) indexOf(): It searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

// 9) The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

// 10) The localeCompare(): Refer image.

// 11) The match() method of String values retrieves the result of matching this string against a regular expression.

// 12) The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.