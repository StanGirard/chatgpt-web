import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Map of chatId to messages
  chats: {
    1: [],
  },
  currentChatId: 1,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;
      state.chats[chatId] = messages;
    },
    setCurrentChatId: (state, action) => {
        state.currentChatId = action.payload;
      },
      createNewChatSession: (state) => {
        const newChatId = Math.max(...Object.keys(state.chats)) + 1;
        state.chats[newChatId] = [];
        state.currentChatId = newChatId;
      },
    },
  });
  
export const { setMessages, setCurrentChatId, createNewChatSession } = chatSlice.actions;
  

export default chatSlice.reducer;
