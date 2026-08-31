// Aquela Marca — carrinho de compras (localStorage)
const CART_KEY = 'aquelamarca_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  const cart = getCart();
  const itemCustom = JSON.stringify(item.customization || null);
  const existing = cart.find((i) => i.slug === item.slug && i.size === item.size && JSON.stringify(i.customization || null) === itemCustom);
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty = Math.max(1, qty);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.qty * i.price, 0);
}

function updateCartBadge() {
  document.querySelectorAll('.cart-count').forEach((el) => {
    el.textContent = getCartCount();
  });
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
