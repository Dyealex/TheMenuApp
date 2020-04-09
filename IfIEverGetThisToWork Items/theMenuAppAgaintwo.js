// theMenuAppAgain.js saving as two so I do not lose this half-ass working file
// id names in use for item1, the Big Salad --- bigSaladPrice; addBigSalad; bigSaladOrdered; removeBigSalad;

// Cart ids are cart-total-title; cart-total-price;

if (document.readyState== 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
var removeCartItemButton = document.getElementsByClassName('buttonDanger')
console.log(removeCartItemButton)
for (var i = 0; i < removeCartItemButton.length; i ++) {
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.remove()
        console.log('Clicked!')
})
}
}
// *** works to here. Console.logs "clicked" when you click the remove button. Still works but removes the "remove" button. Will fix this once I have the cart set up...

// the cart information...cart-total-price is the class for the cart $ amount.

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-total-price')[0]
    // var cartrow = cartItemContainer.getElementsByClassName('cart-row') 
    //  ^^^ he is using this line but I don't think it is what I need here.

    for (var i = 0; i = cartItemContainer.length; i++) {
        var cartItemContainer= cartItemContainer[i]
        var priceElement = cartItemContainer.getElementsByClassName('cartRowTotal')
    }  // Still logs the click and removes the button but does not change the $39.97 And yet again, I get up from here to do something and forget what I wanted to do when I sat back down.
}

console.log('Here!')



// document.getElementById('itemPrice1') {
// for ( )
//     var itemPrice1 = 10;




// for (var i = 0; i < cartRows.length; i++)


// 