import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    apiKey: '',
    model : 'gpt-3.5-turbo'
  };

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setApiKey: (state, action) => {
            state.apiKey = action.payload;
        }
    }
});

export const { setApiKey } = headerSlice.actions;

export default headerSlice.reducer;
