import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChatId, createNewChatSession } from '../Chat/ChatSlice';

function SideContainer() {
  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);
  const dispatch = useDispatch();

  const handleSwitchChat = (chatId) => {
    dispatch(setCurrentChatId(chatId));
  };

  const handleNewChatSession = () => {
    dispatch(createNewChatSession());
  };

  return (
    <div id="side-container">
      <div id="chat-session-heading">Chat Sessions</div>
      <button
        id="new-chat-session-button"
        className="button-green"
        onClick={handleNewChatSession}
      >
        New Chat Session
      </button>
      <div id="chat-sessions">
        {Object.keys(chats).map((chatId) => (
          <button
            key={chatId}
            className={`chat-session-button ${
              chatId === currentChatId ? 'active' : ''
            }`}
            onClick={() => handleSwitchChat(chatId)}
          >
            Chat Session {chatId}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideContainer;
