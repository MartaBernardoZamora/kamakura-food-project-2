//DEBE imprimir en pantalla la información de filtros.
import {filters, products} from "../data/data.js"
import { filterDishes } from "./searcher.js"
import { addButtons } from "../events.js"

const filtersContainer = document.querySelector(".filters-container")
const productsContainer = document.querySelector(".products-container")

function addFilters () {
    if(filtersContainer){
        filtersContainer.innerHTML = "";
        
        
        filters.forEach(filter => {
            const addFilterButton = document.createElement("button")
            addFilterButton.classList.add("filter")
            addFilterButton.setAttribute("data-parent", filter)
            addFilterButton.textContent = filter;
            filtersContainer.appendChild(addFilterButton);
        })
    }
}
addFilters();

function printDishes (filteredProducts) {
    if(productsContainer){
        productsContainer.innerHTML = "";
        filteredProducts.forEach(product => {
            const addProduct = document.createElement("div")
            addProduct.classList.add("product-container")
            addProduct.setAttribute("data-parent", product.category)
            addProduct.setAttribute("data-id", product.id)
            addProduct.innerHTML = `
            <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price-container">
                    <h5>${product.price}€</h5>
                    <button class="add-button">Añadir</button>
                </div>
            `
            productsContainer?.appendChild(addProduct)
        });
        addButtons();
    }
}
printDishes(products)
export {addFilters, printDishes}
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.