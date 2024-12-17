//Intenta separar los eventos en este archivo.
import { filterDishes } from "./components/searcher.js";
import { products } from "./data/data.js";
import { addDishToCart, changeQuantity } from "./components/cart.js";
const filtersContainer = document.querySelector(".filters-container")

filtersContainer.addEventListener("click", (e) => {
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
//VERSIÓN 1 se hace cada vez que se cambia filtro

const addButtons = () =>[...document.querySelectorAll('.add-button')].map(addButton =>{
    addButton.addEventListener('click', addDishToCart);
});
function eventbuttonsgive(){

    const buttons = document.querySelectorAll(".quantity-container button");
    buttons.forEach((button) => { 
       // button.addEventListener("click", ()=> changeQuantity(button)) 
       button.onclick = ()=>changeQuantity(button)
    })
    }
export{addButtons, eventbuttonsgive}