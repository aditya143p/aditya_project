import { createSlice } from "@reduxjs/toolkit";
const Category= createSlice({
    name: 'category',
    initialState: [],
    reducers:
    {
        showurl(state,action)
        {
            return state=action.payload
        }
    }
})
export let {showurl}=Category.actions
export default Category.reducer