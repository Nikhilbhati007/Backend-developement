const call=function(){
    console.log("Bhati JI here")
}
const changeText =function(){
    document.querySelector('h1')
    .innerHTML = "Nikhil Bhati is a champion"
}
setTimeout(changeText,2000)
clearTimeout(call,2000)