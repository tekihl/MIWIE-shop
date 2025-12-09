import type { Product } from "./models";
import { products } from "./product";

const createDetailHtml = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); // Replace 'key' with the actual query parameter name
  console.log(id);

  if (!id) return;

  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) {
    console.error("Product not found");
    return;
  }

  const container = document.getElementById("product-details");
  if (!container) return;

  container.innerHTML = `
  <section class="product-details">
  <img src="${product.imageUrl}" alt="${product.title}">
  <h1>${product.title}</h1>
  <p>${product.description}</p>
  <p class="price">${product.price} SEK</p>
  </section> `;
};

createDetailHtml();
