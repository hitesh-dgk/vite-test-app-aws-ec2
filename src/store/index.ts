import { configureStore } from '@reduxjs/toolkit'
import apiErrorHandlingSlice from './slices/apiErrorHandlingSlice'
import apiSuccessHandlingSlice from './slices/apiSuccessHandlingSlice'
import categorySlice from './slices/categorySlice'
import userSlice from './slices/userSlice'
import surveySlice from './slices/surveySlice'

export const store = configureStore({
  reducer: {
    apiErrorHandling: apiErrorHandlingSlice,
    apiSuccessHandling: apiSuccessHandlingSlice,
    category: categorySlice,
    user: userSlice,
    surveys: surveySlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch