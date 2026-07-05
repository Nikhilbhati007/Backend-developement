// // array
// const fruits=["apple","banana","mango",1.67,true]
// fruits[0]="grapes"
// fruits.push("kiwi")
// fruits.pop()
// fruits.unshift("strawberry")
// fruits.shift()
// console.log(fruits)
// console.log(fruits.includes("banana"))
// console.log(fruits.indexOf("banana"))
// console.log(fruits.length)
// // slice and splice
// const new_fruits=fruits.slice(1,3)
// console.log(new_fruits)
// fruits.splice(1,2,"kiwi","orange")
// console.log(fruits)
// //difference between slice and splice
// // slice : does not modify the original array, returns a new array
// // splice : modifies the original array, returns the removed elements
// const marvel_heros=["Ironman","Spiderman","Thor","Hulk"]
// const dc_heros=["Batman","Superman","Flash","Aquaman"]
// // marvel_heros.push(...dc_heros)
// // console.log(marvel_heros)
// let all_hero=marvel_heros.concat(...dc_heros)
// console.log(all_hero)
//  //spread operator
// all_heros= [...marvel_heros,...dc_heros]
// console.log(all_heros)
// const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_arr)
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))