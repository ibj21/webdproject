const products = [
    { id: 1, name: "Laptop", category: "electronics", price: "$1000" },
    { id: 2, name: "T-Shirt", category: "clothing", price: "$20" },
    { id: 3, name: "Headphones", category: "electronics", price: "$50" },
    { id: 4, name: "Jeans", category: "clothing", price: "$40" }
];

const cart = [];

function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("products");
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`;
    });
}

function filterProducts() {
    const category = document.getElementById("category").value;
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - ${item.price}</li>`).join("");
}

function toggleCartView() {
    const cartDiv = document.getElementById("cart");
    cartDiv.style.display = cartDiv.style.display === "none" ? "block" : "none";
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

document.addEventListener("DOMContentLoaded", displayProducts);
