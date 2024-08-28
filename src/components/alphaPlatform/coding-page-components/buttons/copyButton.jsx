import React,{useState} from 'react'

const CopyButton = () => {

  const [buttonText, setButtonText] = useState('Copy');

  const copyText = () => {
    setButtonText('Copied');
    setTimeout(() => {
      setButtonText('Copy');
    }, 3000);
  };

    return (
        <button onClick={copyText} className=' px-2 py-1 rounded-[0.25rem] bg-algoXcolor '>
            <pre className='text-white  text-[16px]'> {buttonText} </pre>
        </button>
    )
}

export default CopyButton;