import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { City } from '../../models/City'

const initialState: City = {
  cod: 404,
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCity } = citySlice.actions