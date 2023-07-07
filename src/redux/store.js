import { configureStore } from '@reduxjs/toolkit';
import crytoReducer from './cryptocurrency/cryptoSlice';

const store = configureStore({
  reducer: {
    crytoList: crytoReducer,
  },
});

export default store;
