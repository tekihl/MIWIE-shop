import type { CartItem } from "./models";

export let cart: CartItem[] = []

export function getCart(): CartItem[] {
    return cart;
}

export function saveCartToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadCartFromStorage() {
  const data = localStorage.getItem("cart");
  if (!data) return;

  try {
    cart = JSON.parse(data) as CartItem[];
  } catch (error) {
    console.error("Failed to parse cart from storage", error);
    cart = [];
  }
}

export function addToCart(productId: number) {
    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    saveCartToStorage();
}

export function removeFromCart(productId: number) {
    cart = cart.filter((item) => item.productId !== productId);
    saveCartToStorage();
}



