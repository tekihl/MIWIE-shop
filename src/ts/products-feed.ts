import { products } from "./product";

export const createHtml = () => {

    const productsContainer = document.getElementById("products-container");

    if (productsContainer) {

        products.forEach((product) => {

            const cardWrap = document.createElement('div');
            const card = document.createElement("div");
            const cardBody = document.createElement('div');
            const imgWrap = document.createElement('div');
            const productTitle = document.createElement("h5");
            const productPrice = document.createElement("span");

            imgWrap.style.backgroundImage = `url(${product.imageUrl})`;
            productTitle.innerHTML = product.title;
            productPrice.innerHTML = String(product.price) + " SEK";

            cardWrap.classList.add('p-3');
            cardBody.classList.add('card-body',);
            card.classList.add('border', 'col', 'card', 'bg-light');
            imgWrap.classList.add('imgWrap');

            card.appendChild(imgWrap);
            cardBody.appendChild(productTitle);
            cardBody.appendChild(productPrice);
            card.appendChild(cardBody);
            cardWrap.appendChild(card);
            productsContainer.appendChild(cardWrap);

            card.dataset.id = product.id.toString();

            cardWrap.addEventListener("click", () => {
                window.location.assign("/product-details.html?id=" + product.id);
            });

        });
    }
}
