import { beforeAll, beforeEach, describe, test } from "vitest";
import { JSDOM } from 'jsdom';
import {blockNegativeQuantity, addDishToCart} from '../src/components/cart.js';
let dom;
beforeEach(async()=>{
    dom =  await JSDOM.fromFile("index.html", {
        url: 'http://localhost/'
    });
});
describe("testing DOM", () => {
    test("Testing 'inicio' is the first link on the navbar", async () => {
        const nav = dom.window.document.querySelector(".nav-link");
        expect(nav.innerHTML).toBe("Inicio");
    })
    test("Testing funcion blockNegativeQuantity", ()=>{
        const numero= -2;
        const respuesta_esperada=0;
        const resultado = blockNegativeQuantity(numero);
        expect(resultado).toBe(respuesta_esperada);
    })
    test("should verify that a div is a div", () => {       
        let dishId =0 ;
        let respuesta_esperada= document.createElement("div");

        respuesta_esperada=`<div class="cart-container" data-id="0">
                            <button class="close-button"><img src="../src/assets/img/close.svg" alt="close"></button>
                            <div class="text-container">
                                <h3>Miso Ramen</h3>
                                <h5>9.5 €</h5>
                            </div>
                            <div class="quantity-container" id="quantity">
                                <button>+</button>
                                <p class="quantity">1</p>
                                <button>-</button>
                            </div>
                        </div>`
                
        let resultado = addDishToCart(dishId);
        // Verificar que el elemento es un div
        expect(resultado.tagName).toBe("DIV");
        expect(resultado).toBe(respuesta_esperada);
    });
    /*test("Testing addDishToCart", async ()=>{
        let dishId=0;
        const products= [
            {
                id: 0,
                name: 'Pollo',
                description: 'A elegir pollo rebozado o pollo teriyaki.',
                price: 9.50,
                category: "carnes"
            }
        ]
        let cartContainer = dom.window.document.getElementById('cart-products');
        if (!cartContainer) {
            cartContainer = dom.window.document.createElement('div');
            cartContainer.id = 'cart-products';
            dom.window.document.body.appendChild(cartContainer);
        }
        let resultado = addDishToCart(dishId);
        console.log(resultado);
        expect(typeof resultado).toBe("string");          
    })*/

})