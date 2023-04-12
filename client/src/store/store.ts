import { configureStore } from '@reduxjs/toolkit'
import loadReducer from './slices/loadingStore.slice'

export const store = configureStore({
    reducer: {
      loads: loadReducer,
    //   comments: commentsReducer,
    //   users: usersReducer,
    },
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
