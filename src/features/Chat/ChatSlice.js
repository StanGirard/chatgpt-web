import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Map of chatId to messages
  chats: {
    1: [],
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;
      state.chats[chatId] = messages;
    },
  },
});

export const { setMessages } = chatSlice.actions;

export default chatSlice.reducer;
