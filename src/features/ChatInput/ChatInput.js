import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInput } from './ChatInputSlice';
import { setMessages } from '../Chat/ChatSlice';
import useOpenAI from '../../hooks/OpenAI/openAI';

function Footer() {
  const userInput = useSelector((state) => state.footer.userInput);
  const chatId = useSelector((state) => state.chat.currentChatId);
  const messages = useSelector((state) => state.chat.chats[chatId] || []);
  const dispatch = useDispatch();
  const { createChatCompletion } = useOpenAI();

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const handleSendMessage = async (message) => {
    let updatedMessages = [...messagesRef.current, { role: 'user', content: message }];
    dispatch(setUserInput(''));
    dispatch(setMessages({ chatId: chatId, messages: updatedMessages }));
  
    await createChatCompletion('gpt-3.5-turbo', updatedMessages, (response) => {
      if (response) {
        const newMessages = [...messagesRef.current];
        if (messagesRef.current[messagesRef.current.length - 1].role !== 'assistant') {
          newMessages.push({ role: 'assistant', content: response });
        } else {
          const lastMessage = newMessages[newMessages.length - 1];
          const updatedLastMessage = {
            ...lastMessage,
            content: lastMessage.content + response,
          };
          newMessages[newMessages.length - 1] = updatedLastMessage;
        }
        dispatch(setMessages({ chatId: chatId, messages: newMessages }));
      }
    });
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage(userInput);
    }
  };

  return (
    <div id="footer">
      <textarea
        id="user-input"
        rows="3"
        placeholder="Type your message..."
        value={userInput}
        onChange={(e) => dispatch(setUserInput(e.target.value))}
        onKeyPress={handleKeyPress}
      ></textarea>
      <button id="send-button" className="button-green" onClick={() => handleSendMessage(userInput)}>
        Send
      </button>
    </div>
  );
}

export default Footer;
