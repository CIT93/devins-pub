console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js";

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

const handleOrderSubmit = function(event) {
    event.preventDefault();
    const orderData = orderHandler.getOrderInputs();

    if(orderData.isGiftWrap === true) {
        orderSummary.textContent = `Ordered ${orderData.tShirtQuantity} ${orderData.sizeType} T-Shirts gift wrapped`;
    } else {
        orderSummary.textContent = `Ordered ${orderData.tShirtQuantity} ${orderData.sizeType} T-Shirts`;
    }
};

const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log("App Initialized");
};

document.addEventListener('DOMContentLoaded', init);