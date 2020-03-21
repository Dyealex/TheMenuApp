

// ***Yet another youtube video!

let item1 ={name:'Big Salad', cost: 10, ordered:0}; //<-object

let item2= {name:'Small Salad', cost: 9, ordered:0};//<-object

let item3= {name: 'Hamburger Combo', cost:8, ordered:0};
 
let item4 ={name:'Cheeseburger Combo', cost:9, ordered:0};


// function handleClick(element) {
    
// element.innerHTML="Added to Cart"//changes text in 
// }
function item1Add () {
    // alert("Add to your bag?")//changes the text in the alert
    document.getElementById('item1Add').innerHTML= "The BIG Salad" + " $10"
}
function item2Add () {
    
    document.getElementById('item2Add').innerHTML= "The Small Salad" + " $9";
    // if ("item2Add") {
    //     addEventListener('click', window.alert("Add this item to your bag?"))//changes the text in the alert
    // }
}
// window.alert("Add item to your bag?")//changes the text in the alert
function item3Add () {
    // alert("Add to your bag?")//changes the text in the alert
    document.getElementById('item3Add').innerHTML= "The Cheeseburger Combo" + " $9"
}
function item4Add () {
    // alert("Add to your bag?")//changes the text in the alert
    document.getElementById('item4Add').innerHTML= "The Hamburger Combo" + " $8"
}
// console.log(item1Add)
// ^^^f**king FINALLY got something in the cart....





// ****************ignore all of this***********************
// let myDiv = document.getElementById("myDiv");
// let myP = document.getElementById("myP");
// let myP2 = document.getElementById("myP2");
// let myDiv2 = document.getElementById("myDiv2");
// myP.addEventListener('click', function() { 
//     myDiv.style.background = "lightblue"});
// item1.getElementById('click', function(addItem){
//     let item1= window.prompt("How many?")
// })

// var num1 = window.prompt("Please enter a number");
// var num2 = window.prompt("Enter another number")
// num1 = parseFloat(num1);
// num2 = parseFloat(num2)

// document.write(num1 + num2);
// parseFloat= num2 + num1;

// and this shit works too

// let item1 ={name:'Big Salad', cost: 10, ordered:0}; //<-object
// item1 = document.createElement('button')
// item1.textContent = "Big Salad"
// item1.addEventListener('click', function onclick(event) {
// console.log(event.target)}, false)
// document.body.appendChild(item1)
// I can get everything to work but the important shit!!!!! this logs that the button "big salad" was clicked
// item1 = document.createElement('button')
// cartTotal = document.createElement('button')
// item1.addEventListener('click', function onclick(event) {
// item1.addEventListener('click', function onclick(event) {
// for (var i = 0; i < 10; i++) {
//     let item1 = document.createElement('button')
//     item1.textContent = 'click' + i;
//     cartTotal.appendChild(item1);
// }
// })
// })