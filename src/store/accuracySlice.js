import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accuracyPercent: 100,
  finalAccuracyPercent: ''
};

const accuracySlice = createSlice({
  name: 'accuracy',
  initialState,
  reducers: {
    setAccuracyPercent: (state, action) => {
      state.accuracyPercent = action.payload;
    },
    setFinalAccuracyPercent: (state, action) => {
      state.finalAccuracyPercent = action.payload;
    },
  }
});

export const { setFinalAccuracyPercent, setAccuracyPercent } = accuracySlice.actions;

export default accuracySlice.reducer;