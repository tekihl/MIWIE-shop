import { getCart, cart } from "./cart";
import { products } from "./product";

//Visa totalsumma
export function renderCheckoutTotal() {
  const container = document.getElementById("checkout-items");
  if (!container) return;

  const cartItems = getCart();

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Din varukorg är tom.</p>";
    return;
  }

  let total = 0;

  cartItems.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return;
    total += product.price * item.quantity;
  });
  container.innerHTML = `<div class="checkout-total"><Strong>Total:${total} SEK</strong></div>`;
}

//Gå vidare till köp

const completeButton = document.getElementById("complete-purchase");
completeButton?.addEventListener("click", () => {
  cart.length = 0;
  localStorage.setItem("cart", JSON.stringify(cart));
});
renderCheckoutTotal();
