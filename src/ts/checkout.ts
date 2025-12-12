import { getCart, cart, addToCart, removeFromCart } from "./cart";
import { products } from "./product";
import { updateCartCount } from "./cart-count";

//Visa varukorg och totalsumma
export function renderCheckout() {
  const container = document.getElementById("checkout-items");
  if (!container) return;

  const cartItems = getCart();

  if (cartItems.length === 0) {
    container.innerHTML = "<h2>Varukorg</h2><p>Din varukorg är tom.</p>";
    updateCartCount();
    return;
  }
  let html = `<h2>Varukorg</h2>`;
  let total = 0;

  cartItems.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return;

    const lineTotal = product.price * item.quantity;
    total += lineTotal;

    //Lägg till plus minus radera

    html += `
    <div class="checkout-item">
    <div class="checkout-item__info">
    <p><strong>${product.title}</strong></p>

    <p>${lineTotal} SEK</p>
    </div>

    <div class="checkout-item__controls">
    <button class="decrease-btn" data-id=${product.id}>-</button>
    <span class="quantity">${item.quantity}</span>
    <button class="increase-btn" data-id=${product.id}>+</button>
    <button class="remove-btn" data-id=${product.id}>Radera</button>
    </div>
    </div>
    `;
  });

  html += `
  <div class="checkout-total">
  <strong>Total:${total} SEK</strong>
  </div>
`;
  container.innerHTML = html;
}

const checkoutContainer = document.getElementById("checkout-items");
if (checkoutContainer) {
  checkoutContainer.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const id = Number(target.dataset.id);

    if (isNaN(id)) return;

    //Öka antal
    if (target.classList.contains("increase-btn")) {
      addToCart(id);
      updateCartCount();
      renderCheckout();
    }

    //Minska antal
    if (target.classList.contains("decrease-btn")) {
      const item = cart.find((c) => c.productId === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        if (item.quantity <= 0) removeFromCart(id);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        renderCheckout();
      }
    }

    //Radera produkt
    if (target.classList.contains("remove-btn")) {
      removeFromCart(id);
      updateCartCount();
      renderCheckout();
    }
  });
}

//Gå vidare till köp

const completeButton = document.getElementById("complete-purchase");
completeButton?.addEventListener("click", () => {
  cart.length = 0;
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCheckout();
});

renderCheckout();
updateCartCount();
