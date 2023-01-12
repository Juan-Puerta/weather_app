import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true 
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLoading } = loadingSlice.actions