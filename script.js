const cartCount = document.querySelector("#cartCount");
const cartMessage = document.querySelector("#cartMessage");
const cartButton = document.querySelector("#cartButton");
const addButtons = document.querySelectorAll(".add-button");

let cartItems = 0;
const selectedProducts = [];

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.product;

        if (!productName) {
            return;
        }

        cartItems += 1;
        selectedProducts.push(productName);

        cartCount.textContent = String(cartItems);
        cartMessage.textContent =
            `${productName} добавлен в корзину. Спасибо за выбор! ♡`;

        button.innerHTML = "Добавлено <span>✓</span>";
        button.classList.add("is-added");
    });
});

cartButton.addEventListener("click", () => {
    if (selectedProducts.length === 0) {
        cartMessage.textContent =
            "Ваша корзина пока пуста. Выберите любимый чай ♡";
        return;
    }

    const uniqueProducts = [...new Set(selectedProducts)];

    cartMessage.textContent =
        `В корзине: ${cartItems}. ${uniqueProducts.join(", ")}.`;
});