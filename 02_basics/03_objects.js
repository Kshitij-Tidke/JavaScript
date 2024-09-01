// singleton: A singleton object in JavaScript is a design pattern that ensures a class has only one instance, and provides a global point of access to it. Here's an example: 
// Singleton Pattern using an Immediately Invoked Function Expression (IIFE)
const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = {
            property1: 'Hello',
            method1: function () {
                console.log('Method 1 called');
            }
        };
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// console.log(instance1 === instance2); // true, both variables point to the same instance
// instance1.method1(); // Output: Method 1 called

// We create a object using contructor then it is a singleton object it means that it is single object instance.
// Object literals vs singleton: Same performance, differnece is that singleton 
//   Object.create We create a object using contructor method and this is singleton object





// Object literals: It is not a singleton object 
// Interview Important symbol

// Decalring the symbol
const mySym = Symbol("key1");

const JsUser = {
    name: "Kshitij",
    "full name": "Kshitij Gopal Tidke",
    [mySym]: "mykey1",
    age: 22,
    location: "Jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    user: {
        name: "JS"
    },
    hello: function() {
        console.log("Hello");
    }
}

// ways to Accecing Object variable, methods
// console.log(JsUser.age);
// console.log(JsUser["full name"]); // Kshitij Gopal Tidke
// console.log(JsUser[mySym]); // mykey1
// console.log(JsUser); // [Symbol(key1)]: 'mykey1' //IMP
// console.log(typeof JsUser[mySym]); // string

JsUser.isLoggedIn = true
// console.log(JsUser.isLoggedIn);

// We also freeze the object it means that no one change the object value, properties.
// Object.freeze(JsUser)

JsUser.greeting = function () {
    console.log("Hello",this["full name"]);
}
console.log(JsUser.greeting()); // Hello Kshitij Gopal Tidke
console.log(JsUser.greeting); // Reference mila hai


