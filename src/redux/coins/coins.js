import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const COINS_API = 'https://api.coingecko.com/api/v3/coins/list';

const getCoinsFromAPI = async () => {
  const response = await fetch(COINS_API);
  const data = await response.json();
  return data.slice(0, 30);
};

const GET_COINS = 'crypto-data/coins/GET_COINS';
const initialState = [];

const fetchCoins = createAsyncThunk(
  GET_COINS,
  async () => {
    const response = await getCoinsFromAPI();
    return response;
  },
);

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => (action.payload));
  },
});

export default coinsSlice.reducer;
export { fetchCoins };
