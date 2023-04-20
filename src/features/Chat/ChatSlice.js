import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = chatSlice.actions;

export default chatSlice.reducer;