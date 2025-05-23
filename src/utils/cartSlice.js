import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart(state, action){
            console.log(state);
            console.log(action);
        },
        removeFromCart(state, action){
            console.log(state);
            console.log(action);
        },
        clearCart(state, action){
            console.log(state);
            console.log(action);
        },
    }
});


export default cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;