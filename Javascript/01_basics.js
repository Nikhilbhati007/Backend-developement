"use strict"//Treat all Js code as newer version
/*
console.log("Hello, World!");
// This is a single-line comment

/*
Prefer not to use var because it has 
function scope and can lead to unexpected behavior.
*/
/*
// Variables
let name = "Alice"; // String variable
const age = 30;// Constant variable
var isStudent = true; // Boolean variable
// age=20; // This will cause an error because age is a constant
let score; // Undefined variable
score = 95; // Now score is defined
//---------------- Data Types-------------
//int =>2^53
//bigint
//string =>""
//null 
//undefine
//symbol =>unique
console.log(typeof undefined)
console.log(typeof null)//Important
*/
/*
//-------------------Conversion---------------\
let score="hello"
console.log(typeof(score))
let valueinnum=Number(score)
console.log(valueinnum)//Nan
//True=1 and False=0
let valinbool=Boolean(score)
console.log(valinbool)
*/
//---------------------operation---------
// let val=3
// let negval=-val
// console.log(negval) 
// //console.log(2+2)
// //console.log(2-2)
// //console.log(2*2)
// //console.log(2**3)
// // let str="Nikhil"
// // let str2="Bhati"
// // console.log(str+str2)
// // console.log("1"+2)//1 is convert in int
// // console.log(1+"2")//1 is convert in string 
// console.log(+true)
// let gamecounter=100
// gamecounter++
// console.log(gamecounter)
//comparision
// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
//Primitive 
// 7 type : strings, numbers, bigint, boolean, null, undefined, symbol
const score=100 // Number
const is_loggedin=true // Boolean
const temp=null // Null
const user=undefined // Undefined
const id=Symbol("id") // Symbol
//Type of
console.log(typeof score)
console.log(typeof is_loggedin)
console.log(typeof temp)
console.log(typeof user)

//Non-primitive (reference): objects , arrays , function
const person={name:"Nikhil",age:20} // Object
const heros=["Nikhil","Bhati"] // Array
function sayHello(){
    console.log("Hello")
}// function
console.log(typeof person)
console.log(typeof heros)
console.log(typeof sayHello)






