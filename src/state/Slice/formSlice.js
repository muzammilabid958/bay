// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registration: '',
  aircraftType: '',
  date: null,
  callSign: '',
  flightType: '',
  flightRule: '',
  departure: null,
  designation: '',
  selectedFlightType: 'Local',
  showATA: false,
  showATD: false,
  selectedTime: null,
  selectedDatee: null,
  chocksOnOff: true,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    toggleATA: (state) => {
      state.showATA = !state.showATA;
    },
    toggleATD: (state) => {
      state.showATD = !state.showATD;
    },
    toggleChocksOnOff: (state) => {
      state.chocksOnOff = !state.chocksOnOff;
    },
  },
});

export const { updateField, toggleATA, toggleATD, toggleChocksOnOff } = formSlice.actions;
export default formSlice.reducer;
