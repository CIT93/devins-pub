const resultsContainer = document.getElementById('order-summary');
const totalDisplay = resultsContainer.querySelector('#display-total');
const qtyDisplay = resultsContainer.querySelector('#display-qty');
const sizeDisplay = resultsContainer.querySelector('#display-size');
const giftDisplay = resultsContainer.querySelector('#display-gift');

export const displayResults = function(newOrder) {
    totalDisplay.textContent = `${newOrder.totalPrice.toFixed(1)}`;
    qtyDisplay.textContent = `${newOrder.qty}`;
    sizeDisplay.textContent = `${newOrder.size}`;

    if(newOrder.isGiftWrap) {
        giftDisplay.textContent = "Yes";
    } else {giftDisplay.textContent = "No";}

    resultsContainer.style.display = 'block';
};