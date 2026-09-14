console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from "./order-storage.js";

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

    orderStorage.saveOrders(orders);

    resultsDisplay.displayOrder(newOrder);

    // orderSummary.textContent = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`;
    // if(orderData.isGiftWrap === true) {
    //     orderSummary.textContent += ' - gift wrapped'
    // }
};

const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    const loadedOrders = orderStorage.loadOrders();
    if(loadedOrders.length > 0) {
        orders.push(...loadedOrders);
    } else {
        console.log("No orders found, starting fresh.");
    }
    console.log("App Initialized");
};

document.addEventListener('DOMContentLoaded', init);