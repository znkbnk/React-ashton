/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import stringSimilarity from "string-similarity";
import "../helpers/chatbot.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ChatBot() {
  const questions = [
    "Hello! Welcome to Ashton & Moore Ltd, your expert partner in metal finishing. I'm here to assist you. May I have your name, please?",
    "May I inquire about the name of your company? Knowing more about your business will assist us in providing customized metal finishing solutions that align with your industry & specific requirements.",
    "Now that we know a bit more about your company, could you share the specific metal finishing process you're interested in? Whether it's silver plating, chromic anodising, ndt or another technique, understanding your preferences will help us provide the most suitable solutions for your project.",
    "Would you like to get another process?",
    "What other process would you like?",
  ];

  const keywordResponses = {
    "alocrom & iridite ncp":
      "The duration for completing an alocrom or iridite ncp job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 7 days",
    "alocrom & iridite ncp & paint":
      "The duration for completing an alocrom or iridite ncp & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 22 days",
    "alocrom & iridite ncp & chromic ":
      "The duration for completing an alocrom or iridite ncp & chromic anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 12 days",
    "alocrom & iridite ncp & chromic  & paint":
      "The duration for completing an alocrom or iridite ncp & chromic anodising & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 27 days",
    "alocrom & iridite ncp & sulphuric ":
      "The duration for completing an alocrom or iridite ncp & sulphuric anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 14 days",
    "alocrom & iridite ncp & sulphuric  & paint":
      "The duration for completing an alocrom or iridite ncp & sulphuric anodising & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    cadmium:
      "The duration for completing a cadmium job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 10 days",
    "cadmium & paint":
      "The duration for completing a cadmium & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 22 days",
    "calcium modified phosphate":
      "The duration for completing a calcium modified phosphate job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 5 days",
    "chromic ":
      "The duration for completing a chromic anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 10 days",
    "chromic  & paint":
      "The duration for completing a chromic anodising & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    "cold phosphate (automatic)":
      "The duration for completing a cold phosphate (automatic) job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 5 days",
    "electro polish":
      "The duration for completing an electro polish job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 7 days",
    ndt: "The duration for completing a ndt job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 7 days",
    "ndt & alocrom or iridite ncp":
      "The duration for completing a ndt & alocrom or iridite ncp job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 10 days",
    "ndt & alocrom or iridite ncp & paint":
      "The duration for completing a ndt & alocrom or iridite ncp & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    "ndt & alocrom or iridite ncp & sulphuric ":
      "The duration for completing a ndt & alocrom or iridite ncp & sulphuric anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 21 days",
    "ndt & alocrom or iridite ncp & sulphuric  & paint":
      "The duration for completing a ndt & alocrom or iridite ncp & sulphuric anodising & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 27 days",
    "ndt & cadmium":
      "The duration for completing a ndt & cadmium job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 15 days",
    "ndt & cadmium & paint":
      "The duration for completing a ndt & cadmium & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 32 days",
    "ndt & chromic ":
      "The duration for completing a ndt & chromic anodise job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 17 days",
    "ndt & chromic  & alocrom or iridite ncp":
      "The duration for completing a ndt & chromic anodise & alocrom or iridite ncp job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 20 days",
    "ndt & chromic  & alocrom or iridite ncp & paint":
      "The duration for completing a ndt & chromic anodise & alocrom or iridite ncp & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 30 days",
    "ndt & chromic  & paint":
      "The duration for completing a ndt & chromic anodise & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 28 days",
    "ndt & electro polish":
      "The duration for completing a ndt & electro polish job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 10 days",
    "ndt & paint":
      "The duration for completing a ndt & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 22 days",
    "ndt & passivation":
      "The duration for completing a ndt & passivation job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 12 days",
    "ndt & passivation & paint":
      "The duration for completing a ndt & passivation & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    "ndt & passivation & silver":
      "The duration for completing a ndt & passivation & silver job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    "ndt & phosphate":
      "The duration for completing a ndt & phosphate job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 12 days",
    "ndt & phosphate & paint":
      "The duration for completing a ndt & phosphate & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    "ndt & silver":
      "The duration for completing a ndt & silver job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 18 days",
    "ndt & silver & paint":
      "The duration for completing a ndt & silver & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 33 days",
    "ndt & sulphuric ":
      "The duration for completing a ndt & sulphuric anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 20 days",
    "ndt & sulphuric & paint":
      "The duration for completing a ndt & sulphuric anodising & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 30 days",
    paint:
      "The duration for completing a paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 15 days",
    passivation:
      "The duration for completing a passivation job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 7 days",
    phosphate:
      "The duration for completing a phosphate job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 8 days",
    "phosphate & paint":
      "The duration for completing a phosphate & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 20 days",
    "pre pen etch":
      "The duration for completing a pre pen etch job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 5 days",
    silver:
      "The duration for completing a silvert job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 15 days",
    "silver & paint":
      "The duration for completing a silver & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 28 days",
    "sulphuric ":
      "The duration for completing a sulphuric anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 10 days",
    "sulphuric  & paint":
      "The duration for completing a sulphuric anodising & paint job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 25 days",
    "tartaric sulphuric ":
      "The duration for completing a tartaric sulphuric anodising job can vary depending on the size & complexity of the project. Typically, our standard turnaround time is 5 days",
  };

  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter your response");
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [response, setResponse] = useState(""); // New state for the response
  const [showFinishSendButtons, setShowFinishSendButtons] = useState(false); // New state to control button visibility
  const [isChatComplete, setIsChatComplete] = useState(false);

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation, currentQuestionIndex]);

    const showResponse = () => {
      if (inputValue === "") {
        return;
      }

      const similarityThreshold = 0.4;
      const keywords = Object.keys(keywordResponses);
      const inputLowerCase = inputValue.toLowerCase();

      const closestMatch = stringSimilarity.findBestMatch(
        inputLowerCase,
        keywords
      ).bestMatch;

      let response = "";
      if (currentQuestionIndex === 0) {
        response = `Thank you, ${inputValue}! It's great to have you here.  `;
      } else if (currentQuestionIndex === 1) {
        response = `Thank you for sharing that. ${inputValue} sounds like a reputable partner in metal finishing. I appreciate the information.  `;
      } else if (currentQuestionIndex === 3) {
        if (inputValue.toLowerCase() === "yes") {
          if (currentQuestionIndex === 4) {
            const responseKey = closestMatch.target;
            response = keywordResponses[responseKey];
          }
        } else if (inputValue.toLowerCase() === "no") {
          setShowButtons(true);
          setIsChatComplete(true);
          return; // Stop further processing if the response is "no"
        }
      } else if (closestMatch.rating >= similarityThreshold) {
        const responseKey = closestMatch.target;
        response = keywordResponses[responseKey];
      } else {
        response = `${inputValue}? I don't understand`;
      }

      setIsTyping(true);

      setTimeout(() => {
        setConversation((prevConversation) => [
          ...prevConversation,
          { question: questions[currentQuestionIndex], answer: inputValue },
          { answer: response },
        ]);

        if (!isChatComplete) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        setIsTyping(false);
        setPlaceholder("Enter your response");
        setResponse("");
      }, 1000);

      setInputValue("");
    };








  const handleButtonClick = () => {
    const botButton = document.querySelector(".bot-button");
    const textSection = document.getElementById("text-section");

    if (botButton.style.display !== "none") {
      botButton.style.display = "none";
    }

    textSection.style.display = "block";
  };

  const handleCloseButtonClick = () => {
    const botButton = document.querySelector(".bot-button");
    const textSection = document.getElementById("text-section");

    botButton.style.display = "block";
    textSection.style.display = "none";
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      showResponse();

      // Check if the response is "no" and set states accordingly
      if (inputValue.toLowerCase() === "no") {
        setShowButtons(true);
        // No need to proceed with the next question, as buttons indicate the end of the conversation
      } else if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
       if (currentQuestionIndex === 3) {

       }
    }
  };

  const handleFinish = () => {
    // Add any logic you want to execute when the "Finish" button is clicked
    // For example, you might want to end the conversation or perform some cleanup
    console.log("Finish button clicked!");
  };

  return (
    <div className='btn-help'>
      <button
        id='bot-button'
        onClick={handleButtonClick}
        className='bot-button'
      >
        Chat
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
                  className='search-input'
                  type='text'
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  required
                />
                {showFinishSendButtons && (
                  <>
                    <button className='finish-button' onClick={handleFinish}>
                      Finish
                    </button>
                    <button className='send-button' onClick={showResponse}>
                      Send
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
