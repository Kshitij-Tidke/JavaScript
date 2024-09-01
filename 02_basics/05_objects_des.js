const course = {
    course_name: "Js in Hindi",
    course_price: 9999,
    course_instructor: "Hitesh"
}

// console.log(course.course_instructor); //hitesh
// Above course.course_instructor is too big 
const {course_instructor} = course
// console.log(course_instructor); //hitesh
// Give name to property u want
const {course_name: name} = course
// console.log(name); //Js in Hindi


// { // Object kehe lo ya JSON
//     "name": "Kshitij",
//     "courseName": "Js in Hindi",
//     "price": "free"
// }  

// [
//     {},
//     {},
//     {}
// ]


// React
// const navbar = (props.company) => {
// const navbar = ({company}) => { // Destrucring of object or array
// }
// navbar(company = "Tata Motors")

