// let a=30; //global scope
// if (true) {
//     let a=10 
//     const b=20
// }//block scope
// console.log(a); // Output: 30
function one (){
    const username="Nikhil Bhati"; //function scope
    function two(){
        const website="Billionare";
        console.log(username); // Output: Nikhil Bhati  
        console.log(website); // Output: Billionare  
    }//child function scope
    //console.log(website); // Output: ReferenceError: website is not defined 
    two();
}
one();
if (true){
    const username="Nikhil Bhati"; //block scope
    if (username==="Nikhil Bhati"){
        const website="Billionare"; //block scope
        console.log(username + " " + website); // Output: Nikhil Bhati
    }
}