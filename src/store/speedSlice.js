import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  speed: 0,
  finalSpeed: ''
};

const speedSlice = createSlice({
  name: 'speed',
  initialState,
  reducers: {
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    setFinalSpeed: (state, action) => {
      state.finalSpeed = action.payload;
    }
  }
});

export const { setFinalSpeed, setSpeed } = speedSlice.actions;

export default speedSlice.reducer;