import { configureStore, combineReducers } from '@reduxjs/toolkit';
import textAreaReducer from './textAreaSlice';
import accuracyReducer from './accuracySlice';
import speedReducer from './speedSlice';
import serviceReducer from './serviceSlice';

const rootReducer = combineReducers({
  textArea: textAreaReducer,
  accuracy: accuracyReducer,
  speed: speedReducer,
  service: serviceReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;