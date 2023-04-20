import React from 'react';
import { useSelector } from 'react-redux';

const Chat = () => {
  const chats = useSelector((state) => state.chat.chats);
  const chatId = useSelector((state) => state.chat.currentChatId);
  const messages = chats[chatId];

  return (
    <div id="chat-container">
      {messages.map((message, index) => (
        <div key={index}>
          <div>{message.role}</div>
          <div>{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Chat;