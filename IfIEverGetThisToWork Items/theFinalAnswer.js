// theFinalAnswer.js

function item1Add () {
    // alert("Add to your bag?") //changes the text in the alert

    document.getElementById('item1Add').innerText= "The BIG Salad" //innerText and innerHTML seem to work the same. This adds the text to the cart when you click the button attached to the "item1Add()"
}
function getValue() {

    // var y = document.getElementById('boo');

    var y = document.getElementById('cartSumTotal');

    var x = document.getElementById('quantity').value;

    var z = document.getElementById('zoo').value;

    document.getElementById("boo").innerHTML='$' + x * z;  //This is multiplying the number requested by 10 and should stay in the page but it does not. It works, it just goes away.

}
