import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    userInput: '',
  };

export const footerSlice = createSlice({
    name: 'userInput',
    initialState,
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload;
        }
    }
});

export const { setUserInput } = footerSlice.actions;

export default footerSlice.reducer;
