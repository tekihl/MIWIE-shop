import { getCart, cart, addToCart, removeFromCart } from "./cart";
import { products } from "./product";

//Rendera varukorg
export function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const cartItems = getCart();

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Din varukorg är tom</p>";
    return;
  }

  container.innerHTML = "";

  let total = 0;

  cartItems.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
        <div class="cart-item__info">
        <p>${product.title}</p>
        <p>${product.price}</p>
        </div>

        <div class="cart-item__controls">
        <button class="decrease-btn">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="increase-btn">+</button>
        <button class="remove-btn">Radera</button>
        </div>

        `;

    container.appendChild(div);
    //Öka antal
    div.querySelector(".increase-btn")?.addEventListener("click", () => {
      addToCart(product.id);
      renderCart();
    });

    //Minska antal
    div.querySelector(".decrease-btn")?.addEventListener("click", () => {
      const cartItem = cart.find((c) => c.productId === product.id);
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
          removeFromCart(product.id);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    });

    //Ta bort produkt

    div.querySelector(".remove-btn")?.addEventListener("click", () => {
      removeFromCart(product.id);
      renderCart();
    });
    total += product.price * item.quantity;
  });

  //Visa totalsumma
  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-total";
  totalDiv.innerHTML = `<strong>Total:${total} SEK</strong>`;
  container.appendChild(totalDiv);

  //Rensa varukorg
  const clearBtn = document.createElement("button");
  clearBtn.className = "btn btn--primary";
  clearBtn.textContent = "Rensa varukorg";
  clearBtn.addEventListener("click", () => {
    cart.length = 0;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  });
  container.appendChild(clearBtn);
}
renderCart();
