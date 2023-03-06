import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    store: counterReducer,
    search: searchReducer,
  },
})
