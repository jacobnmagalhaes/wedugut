import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerm: '',
}

export const searchSlice = createSlice({
  name: 'MyRecords',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = searchSlice.actions

export default searchSlice.reducer
