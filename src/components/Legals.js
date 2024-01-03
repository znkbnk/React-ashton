import React from 'react'
import ScrollToTopOnMount from '../helpers/ScrollToTopOnMount';
import ChatBot from '../helpers/ChatBot';

const Legals = () => {
  return (
    <div className='legals-container'>
      <ScrollToTopOnMount />

      <div className='chatbot-container'>
        <ChatBot />
      </div>

      
    </div>
  );
};

export default Legals