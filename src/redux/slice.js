import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allRecords: [
    // {
    //   name: 'check',
    //   link: 'https://www.youtube.com/watch?v=ClTcBL4lugE',
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi sequi autem? Doloribus placeat veniam illo repudiandae ab corrupti odit?'
    // }
  ],

  loading: false
}

export const counterSlice = createSlice({
  name: 'MyRecords',
  initialState,
  reducers: {

    addRecords: (state, actions) => {

      console.log('add records ',actions.payload)
      state.loading = true;
      if (state.allRecords.length == 0) {
        state.allRecords = [...actions.payload]
      }
      else {
        state.allRecords = [...actions.payload, ...state.allRecords]

      }
      state.loading = false;

    },

    modifyRecords: (state, actions) => {

      state.allRecords = state.allRecords.map(x => {
        if (x._id == actions.payload._id) {
          return actions.payload
        } else {
          return x
        }
      })
    },

    deleteRecods: (state, actions) => {
      console.log('in delete records', actions)
      state.allRecords = state.allRecords.filter(x => x._id !== actions.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addRecords, modifyRecords, deleteRecods } = counterSlice.actions

export default counterSlice.reducer