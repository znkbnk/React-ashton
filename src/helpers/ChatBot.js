import React, { useEffect, useRef, useState } from "react";
import "../helpers/chatbot.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ChatBot() {
  const questions = [
    "name?",
    "u from?",
    "How old are you?",
    "What project are you working on?",
  ];

  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter your response");
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const showResponse = () => {
    if (inputValue === "") {
      return;
    }

    let response;
    if (currentQuestionIndex === 0) {
      response = `hi ${inputValue}!`;
    } else if (currentQuestionIndex === 1) {
      response = `cool! ${inputValue} is a great place.`;
    } else if (currentQuestionIndex === 2) {
      response = ` ${inputValue}? u look younger`;
    } else if (currentQuestionIndex === 3) {
      response = `${inputValue}? ahahaah good luck`;
    }

    setIsTyping(true);

    setTimeout(() => {
      setConversation([
        ...conversation,
        { question: questions[currentQuestionIndex], answer: inputValue },
        { answer: response },
      ]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsTyping(false);
      setPlaceholder("Enter your response");
    }, 2000);

    setInputValue("");
  };

  const handleButtonClick = () => {
    const botButton = document.getElementById("bot-button");
    const textSection = document.getElementById("text-section");

    if (botButton.style.display !== "none") {
      botButton.style.display = "none";
    }

    textSection.style.opacity = "1";
  };

  const handleCloseButtonClick = () => {
    const botButton = document.getElementById("bot-button");
    const textSection = document.getElementById("text-section");

    botButton.style.display = "block";

    textSection.style.opacity = "0";
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      setConversation([
        ...conversation,
        { question: questions[currentQuestionIndex], answer: inputValue },
      ]);
      showResponse();
    }
  };

  return (
    <div className='btn-help'>
      <button
        id='bot-button'
        onClick={handleButtonClick}
        className='bot-button'
      >
        bot
      </button>
      <div
        id='text-section'
        className='text-section'
        ref={(ref) => {
          chatContainerRef.current = ref;
          scrollToBottom();
        }}
      >
        <button id='close-button' onClick={handleCloseButtonClick}>
          X
        </button>
        <div>
          <div>
            <h2>Chat</h2>
          </div>
          <div>
            {conversation.map((entry, index) => (
              <div key={index} className='chat-entry'>
                <div className='question'>{entry.question}</div>
                <div className='answer'>{entry.answer}</div>
              </div>
            ))}
            <div className='chat-entry'>
              <div className='question'>
                {isTyping ? "Typing..." : questions[currentQuestionIndex]}
              </div>
              <div className='answer' id='ans'>
                <input
                className="search-input"
                  type='text'
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
