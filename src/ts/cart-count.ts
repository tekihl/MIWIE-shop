import { getCart } from "./cart";
export function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;

  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  el.textContent = String(total);
}

updateCartCount();
