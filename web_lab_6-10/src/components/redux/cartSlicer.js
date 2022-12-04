import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from  "immer";

enableMapSet();

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: new Set()
    },

    reducers: {
        addAnimalId: (state, action) => {
            state.value.add(action.payload);
        },

        removeAnimalId: (state, action) => {
            state.value.delete(action.payload);
        } 
    }
})

export default cartSlice.reducer