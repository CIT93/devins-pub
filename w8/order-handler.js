const orderForm = document.getElementById('order-form');
const quantityInput = orderForm.querySelector('#qty');
const sizeTypeRadios = orderForm.querySelectorAll('input[name="size"]');
const isGiftWrapInput = orderForm.querySelector('#gift-wrap');

const getSizeRadiosValue = function(sizeSelected) {
    for(const radio of sizeSelected) {
        if(radio.checked === true) {
            return radio.value;
        }
    }
};

export const getOrderInputs = function() {
    return {
        qty: parseInt(quantityInput.value) || 1,
        size: getSizeRadiosValue(sizeTypeRadios),
        isGiftWrap: isGiftWrapInput.checked
    };
};