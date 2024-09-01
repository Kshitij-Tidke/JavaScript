// non-Singleton Object
// const tinderUser = {}
// Singleton Object 
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "a@a.com",
    fullname: {
        userFullName: {
            firstName: "Kshitij",
            lastName: "Tidke"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

// Optional Chaining: 
// ?. : It check that is exist or not also optional chaining
// example console.log(regularUser?.email)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
// const obj3 = {obj1, obj2} // obj1 ke aadhar obj2
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
                          //target   //source
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);
// console.log(obj1 === obj3); // true

// production level use 
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
// console.log(obj1 === obj3); // false

// we mostly use spread
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Database se value (Array of objects)
const users =[
    {
        id: 1,
        name: "Kshitij"
    },
    {
        id: 2,
        name: "Akash"
    }
]

// console.log(users[0].name);

// Object tinderUser
console.log(tinderUser);
// Most interesting in database we use this
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true/false



