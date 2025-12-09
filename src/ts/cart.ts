import type { CartItem } from "./models";

export let cart: CartItem[] = []

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
}

export function removeFromCart(productId: number) {
  cart = cart.filter((item) => item.productId !== productId);
}



