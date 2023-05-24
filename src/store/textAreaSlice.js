import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  attemptsCount: 0,
  randomTextArray: [],
  currentSymbol: 0,
};

const textAreaSlice = createSlice({
  name: 'textArea',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setAttemptsCount: (state, action) => {
      state.attemptsCount = action.payload;
    },
    setRandomTextArray: (state, action) => {
      state.randomTextArray = action.payload;
    },
    changeRandomTextArraySymbolClassname: (state, action) => {
      const { index, className } = action.payload;
      state.randomTextArray[index].className = className;
    },
    increaseCurrentSymbol: (state, action) => {
      state.currentSymbol += 1;
    },
    resetCurrentSymbol: (state, action) => {
      state.currentSymbol = 0;
    },
  }
});

export const { setInput, setAttemptsCount, setRandomTextArray, changeRandomTextArraySymbolClassname, increaseCurrentSymbol, resetCurrentSymbol } = textAreaSlice.actions;
export default textAreaSlice.reducer;