import React, { useEffect, useState, useRef } from 'react';
import AlphaGPTSearchBar from './alphaGptSearchBar';
import { toast } from 'react-toastify';
import AlphaGptWindowText from './alphaGptWindowText';
import { useSelector } from 'react-redux';
import './styles/alphaGptWindow.css';

const AlphaGPTWindow = () => {

  const GPT_URL = process.env.REACT_APP_CALL_GPT;
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatMessage,setChatMessage] = useState([]);
  const consoleRef = useRef(null);
  const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);

  
  const showError = (notification) => {
    toast.error(
      notification
        ? notification
        : 'Something Went Wrong, Please Try Again!',
        {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"dark"
        }
    );
  };

  useEffect(() => {
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  }, [messages, chatMessage]);


  const askAlpha = async (userInput,setLoading) => {
    if (userInput.trim() !== '') {

      let storedMessages = localStorage.getItem('stored-messages');
      let parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      let currentChats = parsedMessages;
      let tempChats = []
      tempChats.push({ role: 'user', content: userInput });
      const updatedMessages = [...parsedMessages, ...tempChats];
      localStorage.setItem('stored-messages', JSON.stringify(updatedMessages));
      currentChats.push({ role: 'user', content: userInput });

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: userInput },
      ]);

      setLoading(true);
      try {
        const response = await fetch(GPT_URL, {
          method: 'POST',
          headers: {
            Authorization: `${localStorage.getItem('csrf-token')}`, 
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ currentChat: currentChats}),
        });
        

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let partialResponse = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            break;
          }
          const decodedChunk = decoder.decode(value, { stream: true });
          partialResponse += decodedChunk;
          setChatMessage((chatMessage) => [{role: 'assistant', content: partialResponse}]);
        }

        setChatMessage((chatMessage) => []);
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: partialResponse },
        ]);

        let storedMessages = localStorage.getItem('stored-messages');
        let parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
        let tempChats = []
        tempChats.push({ role: 'assistant', content: partialResponse });
        const updatedMessages = [...parsedMessages, ...tempChats];
        localStorage.setItem('stored-messages', JSON.stringify(updatedMessages));

      } catch (error) {
        toast('AlphaGPT is under maintenance!');
        showError();
      }
      setLoading(false);
    }
  };

  useEffect(() => {
      let storedMessages = localStorage.getItem('stored-messages');
      if (storedMessages) {
        let parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages);
      }
  }, []);


  const handleAskGPT = async (userInput) => {
    await askAlpha(userInput,setLoading, showError);
  };

  return (
    <div className=' min-h-[50px] h-full flex flex-col flex-1 w-full p-2 rounded-md  bg-algoblack'>
      <div ref={consoleRef}  className={`gpt-output-console transition-all duration-1000 ease-in-out flex-grow w-full p-2 overflow-auto border-b border-gray-400 mb-2 h-[100%] bg-algoblack`}>
        {
          messages.map((message, index) => (
            <AlphaGptWindowText key={index} type={message.role} message={message.content} />
          ))
        }
        {
          chatMessage.map((message, index) => (
            <AlphaGptWindowText key={index} type={message.role} message={message.content} />
          ))
        }
      </div>
        <AlphaGPTSearchBar sendRequest={handleAskGPT} loading={loading} />
    </div>
  );
};

export default AlphaGPTWindow;
