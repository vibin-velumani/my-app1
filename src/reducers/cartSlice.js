import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers: {
        itemAdded: (state, action) => {
            const itemExists = state.items.find(item => item.id === action.payload.id);
            if (!itemExists) {
              state.items.push(action.payload);
        }
    }
        
    }

})

export const {itemAdded} = cartSlice.actions

export default cartSlice.reducer;
