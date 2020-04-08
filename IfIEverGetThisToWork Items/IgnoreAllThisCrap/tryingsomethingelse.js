
// ****another thing to try John Smilga Youtube video*****

let item1 ={name:'Big Salad', cost: 10, ordered:0}; //<-object
let item2= {name:'Small Salad', cost: 9, ordered:0};//<-object

function item1Add () {
  alert("Add to your bag?")//changes the text in the alert
  document.getElementById('item1Add').innerHTML= "The BIG Salad" + " $10"
  document.addEventListener('click', multi)
    function multi(i){
      item1Add = i++
    }
  }

// function item2Add () {
//   alert("Add to your bag?")//changes the text in the alert
//   document.getElementById('item2Add').innerHTML= "The Small Salad" + " $9"
// }
function removeAll() {
  alert('Empty Your Bag?')
  document.getElementById('h3').innerHTML= "";
}



// variable.....
// const bagBtn = document.querySelector('.bag-btn');//yes
// const closeCartBtn = document.querySelector('.close-cart');//yes
// const clearCartBtn = document.querySelector('.clear-cart');//yes
// const clearOverlay = document.querySelector('.cart-overlay');//yes
// const cartItems = document.querySelector('.cart-items');//yes
// const cartTotal = document.querySelector('.cart-total');//yes
// const cartContent = document.querySelector('.cart-content');//yes
// const productsDOM = document.querySelector('.products-center');//yes

// //cart
// let cart = []


// ^^^^i must have missed this part...this is in the nav bar section which I did not follow....but all items are in the html but different place....









// (function() {
//   const cartInfo = document.getElementById('cart-info');  //div
//   const cart = document.getElementById('cart');//??
//   cartInfo.addEventListener('click', function() {
//     cart.classList.toggle('show-cart')
//   })
  
// });

// ********
