window.onload = () => renderProducts();

const products_container = document.getElementById("products-container");

let products = [
  {
    image: "https://footzonespain.com/wp-content/uploads/2022/05/7-768x768.jpg",
    description: "Nike Air Max 1 Premium Wabi-Sabi",
    price: 699,
  },
  {
    image: "https://footzonespain.com/wp-content/uploads/2022/05/1-10-768x768.jpg",
    description: "Nike Air Jordan 1 Low Cardinal Red",
    price: 599,
  },
  {
    image: "https://footzonespain.com/wp-content/uploads/2022/05/1-14-768x768.jpg",
    description: "Nike SB Dunk Low Green Apple",
    price: 839,
  },
  {
    image: "https://footzonespain.com/wp-content/uploads/2022/05/1-16-768x768.jpg",
    description: "Nike Air Force 1 White Green",
    price: 639,
  },
];

function renderProducts() {
  products.forEach((product) => {
    products_container.innerHTML += `
    <div class="product-card">
      <img class="product-image" src="${product.image}" alt="Produto" />

      <div class="body">
        <p class="product-description mb-16">${product.description}</p>

        <p class="product-price mb-16">
          ${product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
          })}
        </p>

        <button>Adicionar ao carrinho</button>
      </div>
    </div>
    `;
  });
}
