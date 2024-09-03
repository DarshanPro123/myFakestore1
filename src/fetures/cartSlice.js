import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = { ...action.payload, id: nanoid() };
            state.items = [...state.items, newItem];
        },

        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        updateItem: (state, action) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },

        cartCounter: (state) => {
            let count = 0;
            state.items.forEach((item) => {
                count += item.quantity;
            });
            return count;
        },
    },
});

export const { addItem, removeItem, updateItem, cartCounter } = cartSlice.actions;
export default cartSlice.reducer;