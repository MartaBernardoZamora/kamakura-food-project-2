//Intenta separar los eventos en este archivo.
import { changeQuantity } from "./components/cart.js";
const buttons = document.querySelectorAll(".quantity-container button");

buttons.forEach((button) => {
    button.addEventListener("click", () => changeQuantity(button))

    });

