import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '2', title: 'Second Post', content: 'More text' },
  { id: '1', title: 'First Post!', content: 'Hello!' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      // state.push(action.payload)
      const newState = [...state]
      return [action.payload, ...newState]
    },
    postRemoved(state, action) {
      const newState = [...state]
      return newState.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const { postAdded } = postsSlice.actions
export const { postRemoved } = postsSlice.actions

export default postsSlice.reducer
