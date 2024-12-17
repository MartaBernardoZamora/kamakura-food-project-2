//DEBE contener las funcionalidades del carrito de compras.
function blockNegativeQuantity(quantity){
    if (quantity < 0) {
    return 0;
} 
return quantity;
}

let quantity = 1;

/*const buttons = document.querySelectorAll(".quantity-container button");

buttons.forEach((button) => {
    button.addEventListener("click", () => changeQuantity(button))

    });*/

function changeQuantity(button){ 
    if (button.textContent === "+"){
        quantity +=1;
    } else if (button.textContent === "-") {
        quantity -=1;
        quantity = blockNegativeQuantity(quantity);
    } document.querySelector(".quantity").textContent = quantity;
} 

export{changeQuantity}

document.getElementById('close-button').addEventListener('click', function() {
    
    document.getElementById('text-container').remove();
});
