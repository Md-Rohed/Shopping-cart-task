const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const checkoutEl = document.querySelector(".checkout");

const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img" onclick="addToCart(${product.id})">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                       
                    </div>
                    
                    
                </div>
            </div>
        `;
  });
}
renderProdcuts();