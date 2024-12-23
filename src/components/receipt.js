//Aquí intenta poner las funcionalidades del recibo


function receiptTempalteRemove () {

    document.getElementById("receipt-product").remove()

}
receiptTempalteRemove()


function toggleReceipt () {

    if(document.getElementById("receipt-container").style.display === "none") {
        document.getElementById("receipt-container").style.display = "flex"
    } else {
        document.getElementById("receipt-container").style.display = "none"
    }

}

function addReceipt () {

    document.getElementById("receipt-container").innerHTML = ""

    const boughtItems = [...document.querySelectorAll(".cart-container")].map(product => {
        
        const name = product.querySelector(".text-container h3").textContent;
        const price = parseFloat(product.querySelector(".text-container h5").textContent);
        let quantity = parseInt(product.querySelector(".quantity-container > .quantity").textContent);

        return {
            name: name,
            price: price,
            quantity: quantity
        }
        
    })
    console.log(boughtItems)
    renderReceipt(boughtItems)
}  
   

function renderReceipt (boughtItems) {
    
    console.log(boughtItems)
    const insertHTML = boughtItems.map(product => {
        return `
        <div class="receipt-product" id="receipt-product">
            <h3>${product.name}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${product.quantity}</p>
                <h5>Subtotal: ${(product.price)}€</h5>
            </div>
        </div>
        
        `
             
    }).join("")

      const productsReceipt = `
       <button class="close-button" id="close-receipt"><img src="/kamakura-food-project-2/src/assets/img/close.svg" alt="close"></button>
        <h2 class="receipt-title">Recibo</h2>
        ${insertHTML}
        <h3 id="receipt-total">Total: ${receiptTotal(boughtItems)} €</h3>
        <button class="pay-button" id="pay-button">Pagar</button>
        `
        
        document.getElementById("receipt-container").innerHTML = productsReceipt
}

function receiptTotal (boughtItems) {

    const total = boughtItems.reduce((total, product) => {
        return total + product.price
    }, 0)

    return total;

}

function closeReceipt () {

    if(document.getElementById("receipt-container").style.display === "flex") {
        document.getElementById("receipt-container").style.display = "none"
    }
}

export {toggleReceipt, addReceipt, closeReceipt}
