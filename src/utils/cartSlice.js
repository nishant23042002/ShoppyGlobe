import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart(state, action) {
            const existing = state.cartItems.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            const itemId = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === itemId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items = state.cartItems.filter(item => item.id !== itemId);
                }
            }
        },
        clearCart(state) {
            state.cartItems = [];
        },
    }
});


export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;