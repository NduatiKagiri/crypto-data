import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_DETAILS = 'crypto-data/coins/GET_DETAILS';
const initialState = {
  loading: false,
  details: {},
};

const fetchDetails = createAsyncThunk(
  GET_DETAILS,
  async (id) => {
    const DETAILS_API = 'https://api.coingecko.com/api/v3/coins/';
    const response = await fetch(DETAILS_API + id);
    const data = await response.json();
    return data;
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => ({
      loading: false, details: { ...action.payload },
    }));

    builder.addCase(fetchDetails.pending, (state, action) => ({
      loading: true, details: { ...action.payload },
    }));
  },
});

export default detailsSlice;
export { fetchDetails };
