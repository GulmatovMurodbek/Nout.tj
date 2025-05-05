const CART_KEY = "cart";

export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addProductToCart(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.count += 1;
  } else {
    cart.push({ ...product, count: 1 });
  }
  alert("successful added to cart");
  saveCart(cart);
}

export function deleteProductFromCart(productId) {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== productId);
  saveCart(updatedCart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function incrementProductCount(productId) {
  const cart = getCart();
  const product = cart.find((item) => item.id === productId);

  if (product) {
    product.count += 1;
    saveCart(cart);
  }
}

export function decrementProductCount(productId) {
  const cart = getCart();
  const product = cart.find((item) => item.id === productId);

  if (product) {
    product.count -= 1;
    if (product.count <= 0) {
      deleteProductFromCart(productId);
    } else {
      saveCart(cart);
    }
  }
}
