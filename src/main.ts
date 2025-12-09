import './styles/main.scss'
//import { createHtml } from './ts/products-feed'
import { getCart } from './ts/cart';
import { addToCart } from './ts/cart';
import { removeFromCart } from './ts/cart';

//createHtml();
getCart();

document.getElementById("mock-add")?.addEventListener("click", () => {
  addToCart(1); // ← hard-coded productId to test
  console.log(getCart());
});

document.getElementById("mock-remove")?.addEventListener("click", () => {
  removeFromCart(1); // ← hard-coded productId to test
  console.log(getCart());
});

