const orderTableBody = document.getElementById('order-table-body');

const createTableRow = function(order) {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td></td>
    <td>${order.qty}</td>
    <td>${order.size}</td>
    <td>${order.totalPrice}</td>
    `;

    return row;
}

export const renderOrders = function(orders) {
    orderTableBody.innerHTML = '';

    for(const order of orders) {
        const rowElement = createTableRow(order);
        orderTableBody.appendChild(rowElement);
    }
};