import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      // state.push(action.payload)
      return [...state, action.payload]
    },
    postRemoved(state, action) {
      // state.filter((item) => item.id !== action.payload.id)
      const newState = [...state]
      newState.filter((item) => item.id !== action.payload.id)
      return [...newState]
    },
  },
})

export const { postAdded } = postsSlice.actions
export const { postRemoved } = postsSlice.actions

export default postsSlice.reducer
