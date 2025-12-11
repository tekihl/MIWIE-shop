import type { CartItem } from "./models";

export let cart: CartItem[] = loadCart();

function loadCart(): CartItem[] {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCart(): CartItem[] {
  return cart;
}

export function addToCart(productId: number) {
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart();
}

export function removeFromCart(productId: number) {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart();
}
