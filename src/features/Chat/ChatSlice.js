// ChatSlice.js
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
    deleteChatSession: (state, action) => {
      const chatIdToDelete = action.payload;
      delete state.chats[chatIdToDelete];
  
      const remainingChatIds = Object.keys(state.chats);
      if (state.currentChatId === chatIdToDelete) {
        state.currentChatId = remainingChatIds.length > 0 ? remainingChatIds[0] : null;
      }
      if (remainingChatIds.length === 0) {
        state.chats[1] = [];
        state.currentChatId = 1;
      }
    },
  },
});

export const { setMessages, setCurrentChatId, createNewChatSession, deleteChatSession } = chatSlice.actions;

export default chatSlice.reducer;
