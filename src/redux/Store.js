import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'

export default configureStore({
  reducer: {
    cart: cartSlice
  }
})