// SELECT ELEMENTS
const productsElement = document.querySelector(".products");
const cartItemsElement = document.querySelector(".cart-items");
const subtotalElement = document.querySelector(".subtotal");
const checkoutElement = document.querySelector(".checkout");

const totalItemsInCartElement = document.querySelector(".total-items-in-cart");

// Show PRODUCTS
const ShowProducts = () => {
  products.forEach((product) => {
    productsElement.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img" onclick="addToCart(${product.id})">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                       
                       
                    </div>
                    
                    
                </div>
            </div>
        `;
  });
};
ShowProducts();

let cart = [];
updateCart();

// ADD TO CART
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  ShowCartItems();
  ShowSubtotal();
}

// calculate and render subtotal
function ShowSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalElement.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(
    2
  )}`;
  checkoutElement.innerHTML = `Pay BDT ${totalPrice.toFixed(2)}`;
  totalItemsInCartElement.innerHTML = totalItems;
}

// render cart items
function ShowCartItems() {
  cartItemsElement.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsElement.innerHTML += `
        <div class="cart-item">

        <div class="item-info" onclick="removeItemFromCart(${item.id})">
       <button> delete</button>
    </div>
            <div class="item-info" ">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>BDT</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}
// remove item from cart
function removeItemFromCart(id) {
<<<<<<< HEAD
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
=======
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
  }
  
  // change number of units for an item
  function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
  
      if (item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action === "plus" && numberOfUnits < item.instock) {
          numberOfUnits++;
        }
      }
  
      return {
        ...item,
        numberOfUnits,
      };
    });
  
    updateCart();
  }
  
>>>>>>> 91733cdf397f8533fc784016a77f15261fbe3198

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
