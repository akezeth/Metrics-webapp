import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cryptoList: [],
  isLoading: false,
  error: '',
};

const cryptoSlice = createSlice({
  name: 'cryptoList',
  initialState,
  reducers: {

  },
});

export default cryptoSlice.reducer;
