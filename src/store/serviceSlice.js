import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosenLanguage: 'russian',
  isTypingBlocked: true,
  isTypingFinished: false,
  isTypingStarted: false,
  wrongLayout: false,
  isFirstLaunch: true,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.chosenLanguage = action.payload;
    },
    setIsTypingBlocked: (state, action) => {
      state.isTypingBlocked = action.payload;
    },
    setIsTypingFinished: (state, action) => {
      state.isTypingFinished = action.payload;
    },
    setIsTypingStarted: (state, action) => {
      state.isTypingStarted = action.payload;
    },
    setIsFirstLaunch: (state, action) => {
      state.isFirstLaunch = action.payload;
    },
    setWrongLayout: (state, action) => {
      state.wrongLayout = action.payload;
    },
  }
});

export const { setIsFirstLaunch, setIsTypingStarted, setWrongLayout, setIsTypingFinished, setIsTypingBlocked, switchLanguage } = serviceSlice.actions;

export default serviceSlice.reducer;