import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import apiReducer from '../features/Header/HeaderSlice';
import chatReducer from '../features/Chat/ChatSlice';
import footerReducer from '../features/Footer/FooterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    footer: footerReducer,
    header: apiReducer,
    chat: chatReducer,
  },
});
