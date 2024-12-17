//DEBE contener las funcionalidades del carrito de compras.
import { products } from "../data/data.js";
import { filterDishes } from "./searcher.js";
import { eventbuttonsgive } from "../events.js";
const cartInicialClean = () => {
    document.querySelector('#cart-products > .cart-container').remove();
}
cartInicialClean();
const addDishToCart = (event) =>{
    document.querySelector('#cart-products h3').style.display ="none";
    
    const dishId = event.target.closest('.product-container').dataset.id;
    const dish = products.find(dish => dish.id == dishId);
    
    const dishContainer=document.createElement("div");
    dishContainer.classList.add('cart-container');
    dishContainer.dataset.id=dishId;
    dishContainer.innerHTML= `<button class="close-button"><img src="../src/assets/img/close.svg" alt="close"></button>
                        <div class="text-container">
                            <h3>${dish.name}</h3>
                            <h5>${dish.price} €</h5>
                        </div>
                        <div class="quantity-container" id="quantity">
                            <button>+</button>
                            <p class="quantity">1</p>
                            <button>-</button>
                        </div>`
    document.getElementById('cart-products').append(dishContainer) 
    eventbuttonsgive()
};

function blockNegativeQuantity(quantity){
    if (quantity < 0) {
    return 0;
} 
return quantity;
}

let quantity = 1;


function changeQuantity(button){
    const quantityDiv = button.closest('.quantity-container');

    const quantityNumDish = quantityDiv.querySelector('.quantity');

    let quantity = parseInt(quantityNumDish.textContent);

    if (button.textContent === "+"){
        quantity +=1;
    } else if (button.textContent === "-") {
        quantity -=1;
        quantity = blockNegativeQuantity(quantity);
    }

    quantityNumDish.textContent = quantity;


};

export{addDishToCart, changeQuantity}
