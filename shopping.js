const displayLocalStorageData = () => {
    const cart = getCart();
    for (const product in cart) {
        displayProducts(product);
    }
}
const addItem = () => {
    const nameFiled = document.getElementById('product-name');
    const productName = nameFiled.value;
    console.log(productName);
    // Validation
    if (!productName) {
        return;
    }
    // Call Display Item Function
    displayProducts(productName);
    // Store item in localstorage
    addProductToCart(productName);
    nameFiled.value = '';
}

// Display Item
const displayProducts = product => {
    const productsList = document.getElementById('products-list');
    const newItem = document.createElement('li');
    newItem.innerText = product;
    productsList.appendChild(newItem);
}

// Get Current Cart
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;

    if (cart) {
        cartObject = JSON.parse(cart);
    } else {
        cartObject = {};
    }
    return cartObject;
}

// Add Product into Cart
const addProductToCart = product => {
    const cart = getCart();
    if (cart[product]) {
        cart[product] = cart[product] + 1;
    } else {
        cart[product] = 1;
    }
    const cartStringiFied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringiFied);
}

const placeOrder = () => {
    document.getElementById('products-list').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageData();