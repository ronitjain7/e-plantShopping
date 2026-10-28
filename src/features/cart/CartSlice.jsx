import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product with quantity 1; if already in cart, increment quantity
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          description: product.description,
          category: product.category,
          quantity: 1,
        });
      }
    },

    // Increment item quantity by 1
    increaseQuantity: (state, action) => {
      const targetId = typeof action.payload === 'object' ? action.payload.id : action.payload;
      const item = state.items.find((i) => i.id === targetId);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrement item quantity; if at 1, remove the item safely
    decreaseQuantity: (state, action) => {
      const targetId = typeof action.payload === 'object' ? action.payload.id : action.payload;
      const item = state.items.find((i) => i.id === targetId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== targetId);
        }
      }
    },

    // Remove single product completely from cart
    removeFromCart: (state, action) => {
      const targetId = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter((i) => i.id !== targetId);
    },

    // Empty entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;

// Sum of quantities of all items (e.g. 2 snake plants + 3 pothos = 5)
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Sum of (unit price * quantity) across all items
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;