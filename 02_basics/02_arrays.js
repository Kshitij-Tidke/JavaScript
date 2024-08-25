// flat mdn isArray, From, Of


const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]
// // It take array inside array.
// console.log(marvelHeros[3][1]); // flash

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

// spread Operator: We take multiple arrays 
// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

// FLAT Method
// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

// Data scrapping
// console.log(Array.isArray("Hitesh")); // false
// Array.from("Hitesh"): It covert into array. Object string anything
// console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "Hitesh"})); // [] It use empty array
//interesting case

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

const obj = {
    name: "Kshitij",
    age: 22
}

const keysArray = Array.from(Object.keys(obj))
console.log(keysArray); // [ 'name', 'age' ]
const valuesArray = Array.from(Object.values(obj))
console.log(valuesArray); // [ 'Kshitij', 22 ]
const entireArray = Array.from(Object.entries(obj))
console.log(entireArray); // [ [ 'name', 'Kshitij' ], [ 'age', 22 ] ]

