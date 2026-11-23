const cartCount = document.getElementById("cartCount");
const cartMessage = document.getElementById("cartMessage");
const addButtons = document.querySelectorAll(".add-button");

let totalItems = 0;
const uniqueProducts = new Set();

function updateCart(productName) {
    totalItems += 1;
    uniqueProducts.add(productName);
    cartCount.textContent = String(totalItems);
    cartMessage.textContent = "Добавлено: " + productName +
        ". Всего товаров: " + totalItems +
        ", видов чая: " + uniqueProducts.size + " ♡";
}

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        updateCart(button.dataset.product);
    });
});