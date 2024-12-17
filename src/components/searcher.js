//DEBE buscar los productos por los filtros
import { printDishes } from "./menu.js";

function filterDishes(category, products, displayAll) {
    const filteredProducts = displayAll
        ? products
        : products.filter(product => product.category === category);
            
    printDishes(filteredProducts)
}

export {filterDishes}
