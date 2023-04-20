// Chat.js
import React from 'react';
import { useSelector } from 'react-redux';



const Chat = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div id="chat-container">
       {messages.map((message, index) => (
        <div key={index} className="message">
          <div className="message-sender">{message.sender}</div>
          <div className="message-content">{message.content}</div>
        </div>

        ))}
      </div>
  );
};

export default Chat;
