import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "./slices/citySlice";
import { fahrenheitSlice } from "./slices/fahrenheitSlice";
import { loadingSlice } from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    city: citySlice.reducer,
    fahrenheit: fahrenheitSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
