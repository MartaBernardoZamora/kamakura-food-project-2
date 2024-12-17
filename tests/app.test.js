import { describe, test } from "vitest";
import { JSDOM } from 'jsdom';
import {blockNegativeQuantity} from '../src/components/cart.js'

describe("testing DOM", () => {
    test("Testing 'inicio' is the first link on the navbar", async () => {
        const dom =  await JSDOM.fromFile("index.html", {
            url: 'http://localhost/'
          });
        const nav = dom.window.document.querySelector(".nav-link");
        expect(nav.innerHTML).toBe("Inicio");
    })
    test("Testing funcion blockNegativeQuantity", ()=>{
        const numero= -1;
        const respuesta_esperada=0;
        const resultado = blockNegativeQuantity(numero);
        expect(resultado).toBe(respuesta_esperada);

    })

})