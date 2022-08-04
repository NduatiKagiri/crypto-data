import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import coinsReducer from './coins/coins';
import detailsReducer from './coins/details';

const rootReducer = combineReducers({
  coins: coinsReducer,
  details: detailsReducer.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export default store;
