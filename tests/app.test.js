import { beforeAll, beforeEach, describe, expect, test } from "vitest";
import { JSDOM } from 'jsdom';
import {blockNegativeQuantity, addDishToCart, removeDishFromArray} from '../src/components/cart.js';
let dom;
beforeEach(async()=>{
    dom =  await JSDOM.fromFile("index.html", {
        url: 'http://localhost/'
    });
    global.document = dom.window.document;
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
    test("Testing addDishToCart", ()=>{
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
        let resultado_esperado='<buttonclass="close-button"><imgsrc="../src/assets/img/close.svg"alt="close"></button><divclass="text-container"><h3>Pollo</h3><h5>9.5€</h5></div><divclass="quantity-container"id="quantity"><button>+</button><pclass="quantity">1</p><button>-</button></div>';
        let resultado = addDishToCart(dishId, products);
        expect(typeof resultado).toBe("object"); 
        expect(resultado.innerHTML.replace(/\s+/g, '')).toBe(resultado_esperado);
    })
    test("Testing removeDishFromArray", ()=>{
        let dishes=["1", "2", "4", "6"];
        let dishDelete= "4";
        let cartDish=document.createElement("div");
        cartDish.classList.add("cart-container");
        cartDish.dataset.id = dishDelete;
        let resultado_esperado= ["1", "2", "6"];
        let resultado=removeDishFromArray(cartDish, dishes);
        expect(resultado).toEqual(resultado_esperado);
    })
})