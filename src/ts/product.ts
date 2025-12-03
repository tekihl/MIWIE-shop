///Lägg in sökväg för array, var ligger den??/////
import type { Product } from "./data/products";
import { products } from "./data/products";

//Hämta produktID//
function getProductId(): number | null {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? Number(id) : null;
}

//Hitta produkt i array
function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

///Rendera produktdetaljer
function renderProduct(product: Product): void {
  const container = document.getElementById("product-details");
  if (!container) return;

  container.innerHTML = `
    <section class="product-details">
    <img src="${product.image}"alt="${product.title}">
    <h1>${product.title}</h1>
    <p>${product.description}</p>
    <p class="price">${product.price} kr</p>
    <button id="addToCartBtn">Lägg i varukorg</button>
    </section>`;
}

//Starta sidan//
function initProductPage() {
  const id = getProductId();
  if (!id) {
    console.error("Ingen produkt ID i URL");
    return;
  }
  const product = getProductById(id);
  if (!product) {
    console.error("Produkten hittades inte");
    return;
  }

  //Rendera produkt
  renderProduct(product);

  //Lägg i varukorg knapp
  const btn = document.getElementById("addToCartBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("Lagt i varugkorg:", product);
    });
  }
}

//Kör när sidan laddats
document.addEventListener("DOMContentLoaded", initProductPage);
