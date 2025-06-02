<!DOCTYPE html>
<html>
<body>
  <script>
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    const container = document.getElementById('orders-container');

    function renderOrders() {
      container.innerHTML = '';

      if (orders.length === 0) {
        container.innerHTML = '<p class="no-orders">No orders found.</p>';
        return;
      }


      orders.forEach((order, index) => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order';

        orderDiv.innerHTML = `
          <h2>Order #${index + 1}</h2>
          <p><strong>Product:</strong> ${order.name}</p>
          <p><strong>Quantity:</strong> ${order.qty}</p>
          ${order.size ? `<p><strong>Size:</strong> ${order.size}</p>` : ''}
          <p><strong>Price:</strong> ₹${order.price}</p>
          <p><strong>Total:</strong> ₹${order.price * order.qty}</p>
          <div class="order-buttons">
            <button class="buy-again" onclick="buyAgain(${index})">Buy Again</button>
            <button class="delete-order" onclick="deleteOrder(${index})">Delete This Order</button>
          </div>
        `;

        container.appendChild(orderDiv);
      });
    }

    function deleteAllOrders() {
      if (confirm("Are you sure you want to delete all orders?")) {
        localStorage.removeItem('orders');
        orders = [];
        renderOrders();
      }
    }

    function deleteOrder(index) {
      if (confirm("Delete this order?")) {
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
      }
    }

    function buyAgain(index) {
      const order = orders[index];
      const newOrder = { ...order }; // Clone the order
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      alert(`"${order.name}" has been ordered again.`);
      renderOrders();
    }

    // Initial render
    renderOrders();
  </script>
</body>
</html>
