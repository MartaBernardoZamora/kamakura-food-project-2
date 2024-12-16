//DEBE imprimir en pantalla la información de filtros.
import {filters, products} from "../data/data.js"

 function addFilter () {
    const filtersContainer = document.querySelector(".filters-container")
    filtersContainer.innerHTML = "";
    filters.forEach(el => {
        const buttonFilter = document.createElement("button");
        buttonFilter.textContent = el;
        filtersContainer.appendChild(buttonFilter);
        buttonFilter.classList.add("filter");
     })
 }
addFilter();

function addMenuItems() {
    const menuContainer = document.querySelector(".products-container")
    menuContainer.innerHTML = "";
    products.forEach(el => {
        const productContainer = document.createElement("div")
        productContainer.classList.add("product-container")
        productContainer.innerHTML = `<h3>${el.name}</h3>
        <p>${el.description}</p>
        <div class= "price-container">
        <h5>${el.price}</h5>
        <button class= "add-button" data-id="${el.id}"> Añadir</button>
        </div>`
        menuContainer.appendChild(productContainer);
      })
}
addMenuItems();
export {addFilter, addMenuItems}
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.