import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { riotMainAPI } from '../features/apis/riotMainAPI';
import { lolAPI } from '../features/apis/lolApi'
import { headerSlice } from '../components/Header/logic/headerSlice';

const rootReducer = combineReducers({
  [riotMainAPI.reducerPath]: riotMainAPI.reducer,
  [lolAPI.reducerPath]: lolAPI.reducer,
  Header: headerSlice.reducer
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(riotMainAPI.middleware, lolAPI.middleware)
})

export const actions = {
  Header: headerSlice.actions
}