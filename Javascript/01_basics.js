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
// const score=100 // Number
// const is_loggedin=true // Boolean
// const temp=null // Null
// const user=undefined // Undefined
// const id=Symbol("id") // Symbol
// //Type of
// console.log(typeof score)
// console.log(typeof is_loggedin)
// console.log(typeof temp)
// console.log(typeof user)

// //Non-primitive (reference): objects , arrays , function
// const person={name:"Nikhil",age:20} // Object
// const heros=["Nikhil","Bhati"] // Array
// function sayHello(){
//     console.log("Hello")
// }// function
// console.log(typeof person)
// console.log(typeof heros)
// console.log(typeof sayHello)
// +++++++++++++++++++++++++++ Memory Allocation +++++++++++++++++++++++++++++++
// stack memory : primitive data types are stored in stack memory
// heap memory : non-primitive data types are stored in heap memory
// ++++++++++++++++++++++++++ Strings +++++++++++++++++++++++++++++++++++++++++++
// const name = "Nikhil"
// const repo_cnt=80
// console.log(name + " has " + repo_cnt + " repositories") // Concatenation
// // Template literals
// console.log(`${name} has ${repo_cnt} repositories`) // Template literals

// const game_name= new string("COC")
// console.log(game_name[0])//c
// console.log(game_name.length)//3
// console.log(game_name.toUpperCase())//COC
// console.log(game_name.toLowerCase())//coc
// console.log(game_name.includes("COC"))//true
// console.log(game_name.startsWith("CO"))//true
// console.log(game_name.endsWith("C"))//true
// const substring=game_name.substring(0,2)
// console.log(substring)//CO
// const split=game_name.split("C")
// console.log(split)//["", "O", ""]   
// // Trim and replace
// const game_name2="   COC   "
// console.log(game_name2.trim())//COC
//console.log(game_name2.replace("COC","Clash of Clans"))//Clash of Clans

// ***************************NUMBERS***************************
// const score=100.1234
// console.log(score.toFixed(2))//100.12
// console.log(score.toPrecision(4))//100.1
// console.log(Number.isInteger(score))//false
// console.log(Number.isNaN(score))//false
// const bal = new Number(100)
// console.log(bal)
// // ***************************MATHS**************************
// console.log(Math.PI)//3.141592653589793
// console.log(Math.round(4.7))//5
// console.log(Math.floor(4.7))//4
// console.log(Math.ceil(4.7))//5
// console.log(Math.random())//0-1
// console.log(Math.random()*100)//0-99
// console.log(Math.floor(Math.random()*100)+1)//1-99

//*********************************Date and time ****************************
let date=new Date()
console.log(date)//current date and time
console.log(date.toDateString())//Mon Jun 10 2024
let my_time= Date.now()
console.log(my_time)//current time in milliseconds since 1970-01-01
