import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { riotAPI } from '../features/apis/riotAPI';

const rootReducer = combineReducers({
  [riotAPI.reducerPath]: riotAPI.reducer
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(riotAPI.middleware)
    
})

export const actions = {
  //* HERE WE PASS ONLY ACTIONS FROM NORMAL REDUX TOOLKIT SLICE'S
}