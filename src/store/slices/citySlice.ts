import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { City } from '../../models/City'
import { Weather } from '../../models/Weather'
import { Temperature } from '../../models/Temperature'

const cityWeather: Weather = {}
const cityTemp: Temperature = {
  temp: 0,
  feels_like: 0,
  temp_max: 0,
  temp_min: 0,
}

const initialState: City = {
  cod: 404,
  city_name: "",
  weather: cityWeather,
  temperature: cityTemp,
  timezone: 0,
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.cod = action.payload.cod;
      state.city_name = action.payload.city_name;
      state.weather = action.payload.weather;
      state.temperature = action.payload.temperature;
      state.timezone = action.payload.timezone;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCity } = citySlice.actions