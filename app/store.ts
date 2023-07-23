import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        cartSlice:cartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch