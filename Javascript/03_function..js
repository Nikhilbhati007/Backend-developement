
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); // Output: 5
// function say_my_name(name) {    
//     console.log("My name is " + name);
// }
// say_my_name("Nikhil Bhati"); // Output: My name is John
//++++++++++++++++++++++Arrow Function++++++++++++++++++++++
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5
const addtwo = (a, b) => (a+b)
addtwo(2, 3); // Output: 5

const say_my_name = (name) => {
    console.log("My name is " + name);
}

//++++++++++++++++++++++++++THIS Function++++++++++++++++++++++++++
console.log(this); // Output: Window or {}
function say_my_name(name) {
    let my_name=name;
    console.log("My name is " + this.my_name);
}
say_my_name("Nikhil Bhati"); // Output: My name is undefined