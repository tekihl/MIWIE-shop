import { getCart } from "./cart";
import { products } from "./product";

export function renderCart() {

    const cartContainer = document.getElementById("cart-container");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    const cart = getCart();

    cart.forEach((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return;

        const row = document.createElement('div');
        row.classList.add('row', 'border-bottom', 'p-3');

        const title = document.createElement('h6');
        title.textContent = product.title;

        const quantity = document.createElement('h6');
        quantity.textContent = String(item.quantity);

        row.appendChild(title);
        row.appendChild(quantity);

        cartContainer?.appendChild(row);
    })
}

renderCart();