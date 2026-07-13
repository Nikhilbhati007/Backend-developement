// // // //if 
// // // if (true){
// // //     console.log("Hello World"); // Output: Hello World
// // // }
// // // if (false){
// // //     console.log("Hello World"); // Output: nothing
// // // }
// // // // === for strict checking
// // // if ( 1 === 1){
// // //     console.log("Hello World"); // Output: Hello World
// // // }
// // // if ( 1 === "1"){      
// // //     console.log("hello")//nothing
// // // }
// // // Nested 
// // const bal=1000
// // if (bal>500){
// //     console.log("You can get something")
// // } else if (bal>1000){
// //     console.log("you can get gifts")
// // } else{
// //     console.log("Can't buy anything")
// // }
// // && and || operator 
// const a=10
// const b=16
// if (a>8 && b<20){
//     console.log(a+b)
// }
// if (a<8 || b<20){
//     console.log(b-a)
// }
// switch case
// const months=4
// switch(months){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     default:
//         break;
// }
// const email="bhati@gmail.com"
// if (email) {//it will treat this as true value if ther is empty string then it will be false
//     console.log("got email")
// }else{
//     console.log("no email")
// }
// falsy value-:
// false,0,-0,Bigint 0n,"",null,undefined,Nan
//truty value
// "0","false"," ",[],{},function(){}
//nullish coalesing operator (??) : null undefined
let val1;
val1= null ?? 10
console.log(val1)
// terniary opertator
const a=100
a>=80 ? console.log("less than 80") : console.log(" more than 100")