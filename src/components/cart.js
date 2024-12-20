//DEBE contener las funcionalidades del carrito de compras.
import { products } from "../data/data.js";
import { eventbuttonsgive } from "../events.js";
const cartInicialClean = () => document.querySelector('#cart-products > .cart-container')?.remove();
cartInicialClean();
const addDishToCart = (dishId) =>{
    document.querySelector('#cart-products h3').style.display ="none";
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
let productsInCart=[]
const isDishInCart = (event) => {
    let dishId = event.target.closest('.product-container').dataset.id;
    if(!productsInCart.some(dish => dish==dishId)){
        productsInCart.push(dishId);
        addDishToCart(dishId);
    }else alert('El plato ya está en el carrito');
}
function blockNegativeQuantity(quantity, quantityDiv){
    if (quantity < 0) {
        return 0;
    }
    return quantity;
}
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
    //quantityNumDish.textContent = quantity;
    if(quantity>0){//nuevo
        quantityNumDish.textContent = quantity;
    }else{
        removeCartDish (quantityDiv);
    }
};
////nuevo en lo de Carlota
function removeWithButton(event){
    const closeButton = event.target;
    removeCartDish(closeButton);
}
//function removeCartDish (event) {
    //const closeButton = event.target;
function removeCartDish (closeDiv) {
    const cartDish = closeDiv.closest('.cart-container');
    if (cartDish) {
        cartDish.remove();
        removeDishFromArray(cartDish);
    }
}

const removeDishFromArray = (cartDish) =>{
    let dishId = cartDish.dataset.id; 
    productsInCart=productsInCart.filter(dishInArray=> dishInArray !== dishId);
}

export{blockNegativeQuantity, isDishInCart, changeQuantity, removeWithButton}
