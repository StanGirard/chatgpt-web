import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChatId, createNewChatSession, deleteChatSession } from '../Chat/ChatSlice';

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

  const handleDeleteChatSession = (chatId, e) => {
    e.stopPropagation();
    dispatch(deleteChatSession(chatId));
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
          <div key={chatId} className="chat-session-wrapper">
            <button
              className={`chat-session-button ${chatId === currentChatId ? 'active' : ''
                }`}
              onClick={() => handleSwitchChat(chatId)}
            >
              Chat Session {chatId}
              <button
                className="delete-chat-session-button"
                onClick={(e) => handleDeleteChatSession(chatId, e)}
              >
                X
              </button>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideContainer;
