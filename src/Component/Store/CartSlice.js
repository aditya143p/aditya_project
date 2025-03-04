import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name: 'cart',
    // initialState:[],
     initialState :JSON.parse(localStorage.getItem('cartitems')) || [],
    reducers:
    {
        addtocart(state,action)
        {
              state.push(action.payload)  
              localStorage.setItem('cartitems', JSON.stringify(state));        
        },
        removefromcart(state,action)
        {

        }

    
}})

export const {addtocart,removefromcart}=CartSlice.actions;
export default CartSlice.reducer ;

