import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { riotMainAPI } from '../features/apis/riotMainAPI';
import { lolAPI } from '../features/apis/lolApi'

const rootReducer = combineReducers({
  [riotMainAPI.reducerPath]: riotMainAPI.reducer,
  [lolAPI.reducerPath]: lolAPI.reducer,
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(riotMainAPI.middleware, lolAPI.middleware)
})

export const actions = {
  //* HERE WE PASS ONLY ACTIONS FROM NORMAL REDUX TOOLKIT SLICE'S
}