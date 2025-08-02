import { createSlice } from '@reduxjs/toolkit'
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: JSON.parse(localStorage.getItem('users')) || [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, action.payload]
      localStorage.setItem('users', JSON.stringify(state.value))
    },
    removeUser: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id)
      localStorage.setItem('users', JSON.stringify(state.value))
    },
  },
})
export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
