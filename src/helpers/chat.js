/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import stringSimilarity from "string-similarity";
import "../helpers/chatbot.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the ChatBot component
export default function ChatBot() {
  // Define questions array
  const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
    "Question6",
    "Question7",
    "Question8",
  ];

  // Define keywordResponses object
  const keywordResponses = {
    obj1: "value1",
    obj2: "value2",
    obj3: "value3",
    obj4: "value4",
  };

  // Define state variables using useState hook
  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter your response");
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [showFinishSendButtons, setShowFinishSendButtons] = useState(false);
  const [showYesNoButtons, setShowYesNoButtons] = useState(false);
  const [isChatComplete, setIsChatComplete] = useState(false);

  // Create a reference for chat container
  const chatContainerRef = useRef(null);

  // Function to scroll chat container to bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  // Effect to handle changes in currentQuestionIndex for question 4
  useEffect(() => {
    if (currentQuestionIndex === 4) {
      setIsTyping(true);

      const timeoutId = setTimeout(() => {
        setIsTyping(false);

        setPlaceholder("Please choose Yes or No");
        setShowYesNoButtons(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentQuestionIndex]);

  // Effect to handle changes in currentQuestionIndex for question 6
  useEffect(() => {
    if (currentQuestionIndex === 6) {
      setIsTyping(true);

      const timeoutId = setTimeout(() => {
        setIsTyping(false);

        setPlaceholder("Please choose Yes or No");
        setShowYesNoButtons(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentQuestionIndex]);

  // Effect to scroll chat container to bottom when conversation or currentQuestionIndex changes
  useEffect(() => {
    scrollToBottom();
  }, [conversation, currentQuestionIndex]);

  const showResponse = () => {
    // Check if inputValue is empty, return if true
    if (inputValue === "") {
      return;
    }

    // Set the similarity threshold for matching keywords
    const similarityThreshold = 0.4;

    // Get an array of keywords from keywordResponses object
    const keywords = Object.keys(keywordResponses);

    // Convert inputValue to lowercase for case-insensitive comparison
    const inputLowerCase = inputValue.toLowerCase();

    // Find the closest match to inputLowerCase among keywords
    const closestMatch = stringSimilarity.findBestMatch(
      inputLowerCase,
      keywords
    ).bestMatch;

    // Initialize response variable
    let response = "";

    // Determine response based on currentQuestionIndex or keyword similarity
    if (currentQuestionIndex === 0) {
      response = `Response1 `;
    } else if (currentQuestionIndex === 1) {
      response = `Response2   `;
    } else if (currentQuestionIndex === 2) {
      response = `Response3  `;
    } else if (currentQuestionIndex === 4) {
      // Set showYesNoButtons to true and return if currentQuestionIndex is 4
      setShowYesNoButtons(true);
      return;
    } else if (closestMatch.rating >= similarityThreshold) {
      // If the closest match's rating is above the threshold, assign response from keywordResponses
      const responseKey = closestMatch.target;
      response = keywordResponses[responseKey];
    } else {
      // If no match is found above the threshold, assign a default response
      response = `Response4`;
    }

    // Set isTyping to true before setTimeout
    setIsTyping(true);

    // Asynchronous operation to update conversation, current question index, etc.
    setTimeout(() => {
      setConversation((prevConversation) => [
        ...prevConversation,
        { question: questions[currentQuestionIndex], answer: inputValue },
        { answer: response },
      ]);

      // Update currentQuestionIndex if chat is not complete
      if (!isChatComplete) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }

      // Reset isTyping, placeholder, and response
      setIsTyping(false);
      setPlaceholder("Enter your response");
      setResponse("");

      // Check if currentQuestionIndex is greater than or equal to 7 to display special message
      if (currentQuestionIndex >= 7) {
        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation,
            {
              question: "Question ",
            },
          ]);
        });
        setPlaceholder("Kindly choose one of the three options.");

        setShowFinishSendButtons(true);
      }
    }, 1000);

    // Reset inputValue
    setInputValue("");
  };

  // Function to handle click event on "Yes" button
  const handleYesButtonClick = () => {
    // Set placeholder and hide Yes/No buttons
    setPlaceholder("Enter your response");
    setShowYesNoButtons(false);

    // Handle different scenarios based on currentQuestionIndex
    if (currentQuestionIndex === 5) {
      // If currentQuestionIndex is 5, process response and set chat as complete
      const responseKey = stringSimilarity.findBestMatch(
        inputValue.toLowerCase(),
        Object.keys(keywordResponses)
      ).bestMatch.target;
      const response = keywordResponses[responseKey];

      setIsTyping(true);

      setTimeout(() => {
        setConversation((prevConversation) => [
          ...prevConversation,
          { question: questions[currentQuestionIndex], answer: "Yes" },
          { answer: response },
        ]);

        setIsChatComplete(true);
        setShowFinishSendButtons(true);

        setIsTyping(false);
        setPlaceholder("Enter your response");
        setResponse("");
      }, 1000);

      setInputValue("");
    } else {
      // If currentQuestionIndex is not 5, update conversation and currentQuestionIndex
      setIsTyping(true);

      setTimeout(() => {
        setConversation((prevConversation) => [
          ...prevConversation,
          { question: questions[currentQuestionIndex], answer: "Yes" },
        ]);

        setCurrentQuestionIndex(currentQuestionIndex + 1);

        setIsTyping(false);
        setPlaceholder("Enter your response");
        setResponse("");
      }, 1000);

      setInputValue("");
    }
  };

  // Function to handle click event on "No" button
  const handleNoButtonClick = () => {
    // Set isTyping to true and hide Yes/No buttons
    setIsTyping(true);
    setShowYesNoButtons(false);

    // Asynchronous operation to update conversation, set flags, and change UI
    setTimeout(() => {
      setIsTyping(false);

      // Update conversation with the "No" answer
      setConversation((prevConversation) => [
        ...prevConversation,
        { question: questions[currentQuestionIndex], answer: "No" },
      ]);

      // Set flags and update UI elements
      setIsChatComplete(true);
      setShowFinishSendButtons(true);
      setPlaceholder("Enter your response");
      setCurrentQuestionIndex(questions.length);
    }, 1000);
  };

  // Function to handle click event on custom button
  const handleButtonClick = () => {
    // Find and manipulate DOM elements based on button click
    const botButton = document.querySelector(".bot-button");
    const textSection = document.getElementById("text-section");

    // Toggle display of elements
    if (botButton.style.display !== "none") {
      botButton.style.display = "none";
    }
    textSection.style.display = "block";
  };

  // Function to handle click event on close button
  const handleCloseButtonClick = () => {
    // Find and manipulate DOM elements based on button click
    const botButton = document.querySelector(".bot-button");
    const textSection = document.getElementById("text-section");

    // Toggle display of elements
    botButton.style.display = "block";
    textSection.style.display = "none";
  };

  // Function to handle key press event
  const handleKeyPress = (e) => {
    // Check if Enter key is pressed
    if (e.which === 13) {
      // Call showResponse function
      showResponse();
    }
  };

  // Function to reset chat and conversation
  const handleStartAgain = () => {
    // Reset state variables to initial values
    setConversation([]);
    setInputValue("");
    setPlaceholder("Enter your response");
    setIsTyping(false);
    setCurrentQuestionIndex(0);
    setResponse("");
    setShowFinishSendButtons(false);
    setShowYesNoButtons(false);
    setIsChatComplete(false);

    // Scroll chat to bottom
    scrollToBottom();
  };

  // Function to finish chat session
  const handleFinishChat = () => {
    // Reset state variables and close chat interface
    setConversation([]);
    setInputValue("");
    setPlaceholder("Enter your response");
    setIsTyping(false);
    setCurrentQuestionIndex(0);
    setResponse("");
    setShowFinishSendButtons(false);
    setShowYesNoButtons(false);
    setIsChatComplete(false);

    // Close chat interface
    handleCloseButtonClick();
  };

  // Function to send chat conversation via email
  const handleSendChat = () => {
    // Extract conversation answers and format them for email
    const messageBody = conversation
      .filter((entry) => entry.answer)
      .map((entry) => entry.answer)
      .join("\n\n");

    // Define email template parameters
    const templateParams = {
      to_email: "email",
      message: messageBody,
    };

    // Send email using emailjs library
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send email!");
        }
      );
  };
// Render the ChatBot component
return (
  <div className='btn-help'>
    {/* ToastContainer for displaying notifications */}
    <ToastContainer position='bottom-center' autoClose={3000} />
    
    {/* Button to toggle chat visibility */}
    <button
      id='bot-button'
      onClick={handleButtonClick}
      className='bot-button'
    >
      Chat
    </button>

    {/* Chat section */}
    <div
      id='text-section'
      className='text-section '
      ref={(ref) => {
        // Set chatContainerRef and scroll to bottom when chat loads
        chatContainerRef.current = ref;
        scrollToBottom();
      }}
    >
      {/* Close button for hiding chat */}
      <button id='close-button' onClick={handleCloseButtonClick}>
        X
      </button>

      {/* Chat interface */}
      <div>
        <div>
          <h2>Chat</h2>
        </div>

        {/* Display conversation entries */}
        <div>
          {conversation.map((entry, index) => (
            <div key={index} className='chat-entry'>
              <div className='question'>{entry.question}</div>
              <div className='answer'>{entry.answer}</div>
            </div>
          ))}

          {/* Display current question and input field */}
          <div className='chat-entry'>
            <div className='question'>
              {/* Show "Typing..." if isTyping, otherwise display current question */}
              {isTyping ? "Typing..." : questions[currentQuestionIndex]}
            </div>
            <div className='answer' id='ans'>
              {/* Input field for user response */}
              <input
                className='chatbot-input'
                type='text'
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                required
              />

              {/* Display buttons for finishing chat or sending email */}
              {showFinishSendButtons && (
                <div className='chat-buttons'>
                  <button
                    className='finish-button'
                    onClick={handleFinishChat}
                  >
                    Finish Chat
                  </button>
                  <button className='start-button' onClick={handleStartAgain}>
                    Start Again
                  </button>
                  <button className='send-button' onClick={handleSendChat}>
                    Send email
                  </button>
                </div>
              )}

              {/* Display Yes/No buttons if needed */}
              {showYesNoButtons && (
                <div className='chat-buttons'>
                  <button
                    className='yes-button'
                    onClick={handleYesButtonClick}
                  >
                    Yes
                  </button>
                  <button className='no-button' onClick={handleNoButtonClick}>
                    No
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
              }