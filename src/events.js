//Intenta separar los eventos en este archivo.
import { filterDishes } from "./components/searcher.js";
import { products } from "./data/data.js";
import { addDishToCart } from "./components/cart.js";
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

document.getElementById("cart").addEventListener('click', function() {
    console.log ('¡Haz hecho clic en el botón!');
});

document.getElementById("cart").addEventListener('click', function() {
    // Cambiar display de 'none' a 'flex'
   if (document.getElementById("cart-container").style.display === 'flex') {
    document.getElementById("cart-container").style.display ='none'
   } else {document.getElementById("cart-container").style.display = 'flex'}
});

export{addButtons}