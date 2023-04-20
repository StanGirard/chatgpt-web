import React from 'react';
import Header from '../Header/Header';
import Footer from '../ChatInput/ChatInput';
import Chat from '../Chat/Chat';

function MiddleContainer() {
  return (
    <div id="app-container">
      <Header />
      <Chat />
      <Footer />
    </div>
  );
}

export default MiddleContainer;