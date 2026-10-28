import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem: Add a plant to the cart with quantity 1; if already in cart, increment quantity
    addItem: (state, action) => {
      const product = action.payload;
      const unitCost = typeof product.cost !== 'undefined' ? Number(product.cost) : Number(product.price || 0);

      const existingItem = state.items.find(
        (item) => item.name === product.name || (product.id && item.id === product.id)
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id || product.name,
          name: product.name,
          cost: unitCost,
          price: unitCost, // Keep both for full compatibility
          image: product.image,
          description: product.description,
          category: product.category,
          quantity: 1,
        });
      }
    },

    // removeItem: Remove the selected plant from the cart completely
    removeItem: (state, action) => {
      const target = action.payload;
      const targetKey = typeof target === 'object' ? (target.name || target.id) : target;
      state.items = state.items.filter(
        (item) => item.name !== targetKey && item.id !== targetKey
      );
    },

    // updateQuantity: Update the quantity of the selected cart item; remove if quantity <= 0
    updateQuantity: (state, action) => {
      const payload = action.payload || {};
      const targetKey = payload.name || payload.id || (typeof payload !== 'object' ? payload : null);
      const newQuantity = typeof payload.quantity === 'number' ? payload.quantity : undefined;

      if (newQuantity !== undefined) {
        if (newQuantity <= 0) {
          state.items = state.items.filter(
            (item) => item.name !== targetKey && item.id !== targetKey
          );
        } else {
          const item = state.items.find(
            (i) => i.name === targetKey || i.id === targetKey
          );
          if (item) {
            item.quantity = newQuantity;
          }
        }
      }
    },

    // Backwards-compatible clearCart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Exact required reducer action exports
export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

// Aliases for backwards compatibility
export const addToCart = addItem;
export const removeFromCart = removeItem;

// Selectors
export const selectCartItems = (state) => state.cart.items;

// Sum of quantities of all items
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Sum of (cost * quantity) across all items
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + (item.cost || item.price || 0) * item.quantity, 0);

export default cartSlice.reducer;
