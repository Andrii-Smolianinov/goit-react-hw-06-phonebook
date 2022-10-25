import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

export const { setFilter } = filterSlice.actions;

export const getFilter = state => state.filter;
