
let movies =[]

const addMovie = (ev) => {
    ev.preventDefault ();
    let movie = {
        id: Date.now,
        title: document.getElementById('title').value, 
        year: document.getElementById('yr').value
    }
    movies.push(movie);
    document.forms [0].reset ();
    console.warn('added', {movies});
    // let pre = document.querySelector('msg')
}
document.addEventListener('DOMContentLoaded', () =>
document.getElementById('btn').addEventListener('click', addMovie))
;











// let item1Add ={name:'Big Salad', price: 10, ordered:0}; //<-object


// btnOne.addEventListener('click', item1Add)

// function item1price(){
//     for (var i = 10; i < 20; i++)
//     document.getElementById('itemOneAdd').innerHTML = "The BIG Salad";
// }
// function item1Add() {
//      document.getElementById('itemOneAdd').innerHTML= 'The BIG salad' + ' 10';








// btnOne = button ID/action = onclick
// itemOneAdd =li ID/chages with button click
// item1price = item price ID/input type = number/goes up to 20
// itemOne = span ID
// let item1Add ={name:'Big Salad', price: 10, ordered:0}; //<-object

// btnOne.addEventListener('click', item1Add)

// function () {
//     document.getElementById('itemOneAdd').innerHTML= 'The BIG salad' + ' 10';
//     alert('Hello World');
//     document.getElementById('itemOneAdd').addEventListener('click', function itemOneAdd() {
//         alert=('Hello World again!')
// }
    // console.log(item1Add.target)
    
//     var num = window.prompt('enter another number')

//     num1 = parseFloat(num1)
//     num2 = parseFloat(num2)
//     document.write(num1 + num2)
    
// function handleClick(element){
//     alert("Clicked " + element.id);
// }

// var header = document.getElementById("myHeader");

// header.addEventListener("click", function(){
//      alert("You clicked " + header.id);
// });









// const addedToCart = document.getElementById('addedToCart')
// var item1 ={'Big Salad': 10, //<-object
// item1price: '10',
// // const item1price = 10
// }
// function mousePressed() {
    // getElementById('item1Add').



// }





// function item1Add () {
//     // alert("Add to your bag?")//changes the text in the alert
    
//     let btnOne =document.getElementById('item1Add').value = "The BIG Salad " +  10;
//     let 
// }
// for (var i = 0; i < 20; i++){
//     item1price.const = item1price.const +1;
// }
// function btnOne () {
    // item1Add

//         document.addEventListener ('click', item1).getElementById.innerHTML= "item1Add";
//     }
