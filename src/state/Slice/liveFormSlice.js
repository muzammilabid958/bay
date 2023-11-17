// liveFormSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    // Add other form fields here
  },
  ataToggle: false,
  atdToggle: false,
  chocksToggle: true,
};

const liveFormSlice = createSlice({
  name: 'liveForm',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    toggleATA: (state) => {
      state.ataToggle = !state.ataToggle;
    },
    toggleATD: (state) => {
      state.atdToggle = !state.atdToggle;
    },
    toggleChocksOnOff: (state) => {
      state.chocksToggle = !state.chocksToggle;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.ataToggle = initialState.ataToggle;
      state.atdToggle = initialState.atdToggle;
      state.chocksToggle = initialState.chocksToggle;
    },
  },
});

export const { updateField, toggleATA, toggleATD, toggleChocksOnOff, resetForm } = liveFormSlice.actions;

export default liveFormSlice.reducer;
