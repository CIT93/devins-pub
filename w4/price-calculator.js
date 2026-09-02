const tShirt = 15;
const wrapped = 2;

export const calculateTotal = function(orderData) {
    let total = orderData.qty * tShirt;
    if(orderData.isGiftWrap) totalPrice += wrapped;
    return {totalPrice: total};
};