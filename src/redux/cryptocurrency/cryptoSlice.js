import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  crytoList: [],
  isloading: false,
  error: '',
};

const url = 'https://api.coincap.io/v2/assets';

export const fetchCrypto = createAsyncThunk('crypto/fetchCrypto', async (thunkAPI) => {
  try {
    const response = await axios(url);
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong!');
  }
});

const cryptoSlice = createSlice({
  name: 'crytoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, (state) => ({
      ...state, isloading: true,
    }));
    builder.addCase(fetchCrypto.fulfilled, (state, action) => ({
      ...state,
      isloading: false,
      crytoList: action.payload,
      error: '',
    }));

    builder.addCase(fetchCrypto.rejected, (state, action) => ({
      ...state,
      isloading: false,
      crytoList: [],
      error: action.error.message,
    }));
  },
});

export default cryptoSlice.reducer;
