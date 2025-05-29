const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    const actionsDiv = document.getElementById('purchase-actions');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart() {
      cartContainer.innerHTML = '';
      total = 0;

      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = "Total: ₹0";
        actionsDiv.style.display = "none";
        return;
      }

      cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';

        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <small>Quantity: ${item.qty}${item.size ? ", Size: " + item.size : ""}</small>
          <small>Price per unit: ₹${item.price}</small>
          <small>Subtotal: ₹${item.price * item.qty}</small>
          <button class="btn btn-remove" onclick="removeItem(${index})">Remove</button>
          <button class="btn" onclick="buySingleItem(${index})">Buy Now</button>
        `;

        total += item.price * item.qty;
        cartContainer.appendChild(itemDiv);
      });

      totalDisplay.textContent = Total: ₹${total};
      actionsDiv.style.display = "flex";
    }

    function removeItem(index) {
      if (confirm(Remove ${cart[index].name} from the cart?)) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
      }
    }

    function clearCart() {
      if (confirm("Are you sure you want to clear the entire cart?")) {
        cart = [];
        saveCart();
        renderCart();
      }
    }

    function purchaseAll() {
      alert(Proceeding to purchase all items. Total amount: ₹${total});
      // Simulate checkout logic here
      clearCart();
    }

    function buySingleItem(index) {
      const item = cart[index];
      alert(Proceeding to purchase: ${item.name}, Quantity: ${item.qty}, Total: ₹${item.qty * item.price});
      cart.splice(index, 1);
      saveCart();
      renderCart();
    }

    renderCart();
