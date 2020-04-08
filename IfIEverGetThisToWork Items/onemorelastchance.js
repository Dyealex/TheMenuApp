// onemorechance.js *** The Menu App ***

if (document.readyState== 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemsButton = document.getElementsByClassName('removeButton')
    console.log(removeCartItemsButton)
    for (var i = 0; i< removeCartItemsButton.length; i++) {
        var button = removeCartItemsButton[i]
        button.addEventListener('click', removeCartItemsButton)
    
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
}

// var addToCartButtons = document.getElementsByClassName('add-this-menu-item')
// for (var i = 0; i < quantityInputs.length; i++) {
    
// }

// the remove from cart section
var emptyCartItems = document.getElementsByClassName('removeButton') //declares variable emptyCartItems and will remove items with the class name 'removeButton' which I will have to fix because it removes all the items in the div *** fixed****

for (var i = 0; i < emptyCartItems.length; i++) {
    var button = emptyCartItems[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
        console.log("Clicked!") 
        // ***fixed ***works to here I will come back to this. Currently clicking on it removes all the items on the page! Don't think that is the way it is suppose to work.
    })
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0
    } updateCartTotal()
}
function updateCartTotal() { 
    //variable updateCartTotal declared above.
    var cartItemContainer = document.getElementsByClassName('cart-total-price')[0] 
    //may have to make a unique identifier for each item....
    var cartRows = cartItemContainer.getElementsByClassName('cartRowTotal')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cartTotalPrice')[0]
        var quantityElement = cartRow.getElementsByClassName('dontKnowWhatIPutHereYet')[0]
        var quantity = quantityElement.value 
        total=total+ (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
// this will not run as is but I  have to try it just to see what I have to rename or identify. // ***Low and behold, it ran! ***


console.log(emptyCartItems)