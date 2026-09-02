console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');
const orders = [];

const handleOrderSubmit = function(event) {
    event.preventDefault();
    const orderData = orderHandler.getOrderInputs();
    const calculatePrice = priceCalculator.calculateTotal(orderData);

    const newOrder = {
        ...orderData,
        ...calculatePrice,
        timestamp: new Date().toISOString()
    };
    orders.push(newOrder);
    console.log(orders);

    orderSummary.textContent = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`;
    if(orderData.isGiftWrap === true) {
        orderSummary.textContent += ' - gift wrapped'
    }
};

const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log("App Initialized");
};

document.addEventListener('DOMContentLoaded', init);