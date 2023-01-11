import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isInFahrenheit: true 
}

export const fahrenheitSlice = createSlice({
  name: 'fahrenheit',
  initialState,
  reducers: {
    changeFahrenheit: (state) => {
      state.isInFahrenheit = !state.isInFahrenheit
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeFahrenheit } = fahrenheitSlice.actions