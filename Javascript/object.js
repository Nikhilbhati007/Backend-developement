// //singleton
// //object literal
// const my_symbol=Symbol("my_symbol")
// const jsuser={
//     name:"john",
//     [my_symbol]:"my symbol",
//     age:30,
//     location:"USA"
// }//empty object
// console.log(jsuser.name)
// console.log(jsuser[my_symbol])
// const jsuser2=new Object()//object constructor

// const tinder =new Object()//singleton object
// tinder.name="john"  
// tinder.id=1782
// const regular_user={
//     email:"nmajd.@gmail.com",
//     fulname : {
//         firstname:"john",
//         lastname:"doe"
//     }
// }
// console.log(regular_user.fulname.firstname)
// const obj1={1: "value1", 2: "value2"}
// const obj2={1: "value1", 2: "value2"}
// Object.assign(obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)
// user1[1].email= "value1"
// user1[2]= "value2"
//++++++++++++++++++++++++++++destructuring
const course={
    courname:"javascript",
    price:100,
    course_instructor:{
        name:"john",
        email:"jjd@gmail.com"}

}
const {courname,price,course_instructor:{name,email}}=course
console.log(courname)
console.log(price)
//Json
{
    name:"john",
    email:"hello@gmail.com",
    phone:1234567890
}
// ++++++++++++++++++++++++++++++ APIs
