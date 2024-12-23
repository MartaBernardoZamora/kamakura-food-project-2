//Intenta separar los eventos en este archivo.
import { filterDishes } from "./components/searcher.js";
import { products } from "./data/data.js";
import { isDishInCart, changeQuantity, removeWithButton } from "./components/cart.js";
import { toggleReceipt, closeReceipt } from "./components/receipt.js";
const filtersContainer = document.querySelector(".filters-container")

filtersContainer?.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter")) {
        const category = e.target.textContent.trim();
        let displayAll;
        if(category === "todos") {
            displayAll = true
        }
        else {
            displayAll = false
        }
        filterDishes(category, products, displayAll);
    }
})
const addButtons = () =>[...document.querySelectorAll('.add-button')].map(addButton =>{
    addButton.addEventListener('click', isDishInCart);
});
function eventbuttonsgive(){
    const buttons = document.querySelectorAll(".quantity-container button");
    buttons.forEach((button) => { 
       button.onclick = ()=>changeQuantity(button)
    })

    const allButtons = document.querySelectorAll('.close-button')
    allButtons.forEach((button) => { 
        button.addEventListener('click', removeWithButton);
    });
}

document.getElementById("cart")?.addEventListener('click', function() {
   if (document.getElementById("cart-container").style.display === 'flex') {
    document.getElementById("cart-container").style.display ='none'
   } else {document.getElementById("cart-container").style.display = 'flex'}
});

document.querySelector(".proceedPay-button").addEventListener("click", toggleReceipt)

document.getElementById("receipt-container").addEventListener("click", (event) => {
  if(event.target.matches("#close-receipt"))  
    closeReceipt()
})

export{addButtons, eventbuttonsgive}