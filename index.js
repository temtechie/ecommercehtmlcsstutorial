const products = [
    {
        name: "Dolor Lorem Ipsum",
        price: 99.99,
        image: "./images/dress1men.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
        name: "standard Lorem Ipsum",
        price: 49.99,
        image: "./images/fashion3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
        name: "Dolor Lorem Ipsum",
        price: 49.99,
        image: "./images/dress4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
        name: "Dolor Lorem Ipsum",
        price: 49.99,
        image: "./images/fashion5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
        name: "Dolor Lorem Ipsum",
        price: 49.99,
        image: "./images/fashion2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
        name: "Dolor Lorem Ipsum",
        price: 49.99,
        image: "./images/fashion6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
        name: "Dolor Lorem Ipsum",
        price: 49.99,
        image: "./images/fashion1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
];

const productContainer = document.querySelector(".product-container");
const cartBadge = document.querySelector(".cart-badge");

let cartCount = 0;

products.forEach((product) => {
    const productCard = document.createElement("section");
    productCard.classList.add("product");
    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <div class="price">$${product.price.toFixed(2)}</div>
    <button class="add-to-cart">Add to Cart</button>
`;
    const addToCartButton = productCard.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => {
        cartCount++;
        cartBadge.innerText = cartCount;
    });
    productContainer.appendChild(productCard);
});