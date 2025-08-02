import { configureStore } from '@reduxjs/toolkit'
import users from '../redux/features/usersSlice'
export default configureStore({
  reducer: {
    users,
  },
})
