import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const COINS_API = 'https://api.coingecko.com/api/v3/coins/list';

const getCoinsFromAPI = async () => {
  const response = await fetch(COINS_API);
  const data = await response.json();
  return data.slice(0, 1000);
};

const GET_COINS = 'crypto-data/coins/GET_COINS';
const initialState = {
  loading: false,
  coins: [],
};

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
    builder.addCase(fetchCoins.fulfilled, (state, action) => ({
      loading: false, coins: action.payload,
    }));

    builder.addCase(fetchCoins.pending, (state, action) => ({
      loading: true, coins: action.payload,
    }));
  },
});

export default coinsSlice;
export { fetchCoins };
