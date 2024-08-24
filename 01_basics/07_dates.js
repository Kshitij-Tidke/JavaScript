 let myDate = new Date()
// console.log(typeof myDate); // Object

//  console.log(myDate); // 2024-08-24T12:45:00.473Z
//  console.log(myDate.toString()); // Sat Aug 24 2024 12:45:52 GMT+0000 (Coordinated Universal Time)

//  console.log(myDate.toDateString()); // Sat Aug 24 2024
//  console.log(myDate.toISOString()); // 2024-08-24T12:47:42.044Z
//  console.log(myDate.toJSON()); // 2024-08-24T12:48:03.834Z 
//  console.log(myDate.toLocaleString()); // 8/24/2024, 12:48:16 PM
//  console.log(myDate.toLocaleDateString()); // 8/24/2024
//  console.log(myDate.toLocaleTimeString()); // 12:48:58 PM

// let myCreatedDate = new Date(2023, 0, 23) // month started from 0 to 11
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM
// myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM
// myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM
// myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1724504244696 // 01 Jan 1970 se abhi tak ka value 
// console.log(myCreatedDate.getTime()); 

// Comparsion hamesh mili sec me kijiye 
// Interview question  milisec ko sec mai kijiye
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // month start with 0 to 11
// console.log(newDate.getDay());
// console.log(newDate.getFullYear())

newDate.toLocaleString('default', {
    weekday: "long",
})


