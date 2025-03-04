import {configureStore} from '@reduxjs/toolkit';
import DetailSlice from './DetailSlice';
import CartSlice from './CartSlice';
import Category from './CategorySlice';
const store = configureStore({
    reducer: {
         detail: DetailSlice,
         cart: CartSlice,
         category:Category
        
    }
})
export default store;