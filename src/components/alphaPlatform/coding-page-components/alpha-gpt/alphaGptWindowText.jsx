import React,{useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./styles/alphaGptWindowText.css";

const AlphaGptWindowText = ({ message, type }) => {


  const [buttonText, setButtonText] = useState('Copy');

  const copyText = () => {
    setButtonText('Copied');
    setTimeout(() => {
      setButtonText('Copy');
    }, 2000);
  };


  let formattedData;
  if (message) {
    formattedData = message.replace(/```/g, '');
  }



  return (
    <div className={`gpt-window-text  relative flex-1 rounded-md flex mb-4 bg-transparent w-[full] font-mono ${type === 'user' ? 'flex-row-reverse' : 'flex-row-reverse'} border-b border border-gray-700 items-center`}>
      <div className={` flex whitespace-pre-line w-full font-mono h-full p-2 text-[1rem] font-normal tracking-wide text-[white] dark:text-white overflow-hidden w-full  justify-start text-justify `}>
        {
          <SyntaxHighlighter language="typescript" wrapLongLines={true} customStyle={{ width:"100%", borderRadius: "8px", fontSize: "16px", padding: "12px", overflow: "hidden", textAlign: `${type === 'user' ? 'justify' : 'justify'}`, }} style={nightOwl}>
            {formattedData}
          </SyntaxHighlighter>
        }
      </div>

      <div className='h-full m-1 w-8 justify-start align-top text-center'>
        {type === 'user' ? (
          <h1 className="tracking-wide font-bold antialiased text-algoprob text-2xl hover:duration-300 hover:scale-125">U</h1>
        ) : (
          <h1 className="tracking-wide font-bold antialiased text-algoprob text-2xl hover:duration-300 hover:scale-125">X</h1>
        )}
      </div>
        {
          type === 'assistant' &&
          <div className=' absolute bottom-2 right-4'>
            <CopyToClipboard text={formattedData} >
              <button onClick={copyText} className=' px-[2px]  py-[1px] rounded-[0.25rem] bg-gray-400 '>
                  <pre className='text-algoblack  text-[13px]'> {buttonText} </pre>
              </button>
            </CopyToClipboard>
          </div>
      }
    </div>
    
  );
};

export default AlphaGptWindowText;
