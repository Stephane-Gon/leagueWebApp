import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  currentTab: string
}

const initialState: InitialState = {
    currentTab: ""
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setCurrentTab: (state, { payload }) => {
            state.currentTab = payload
        },
    }
})
