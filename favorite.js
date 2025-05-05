const FAVORITES_KEY = "favorite_products";

export function getFavoriteProducts() {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}
export function addToFavorites(product) {
  const favorites = getFavoriteProducts();
  const exists = favorites.find((p) => p.id === product.id); 
  if (!exists) {
    favorites.push(product);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFromFavorites(productId) {
  console.log(productId);

  const favorites = getFavoriteProducts().filter((p) => p.id !== productId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(productId) {
  console.log(getFavoriteProducts().some((p) => p.id === productId));

  return getFavoriteProducts().some((p) => p.id === productId);
}
