import React, { useState,useEffect } from 'react';
import EdiText from 'react-editext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './styles/customInput.css';

const CustomInput = () => {
 
  const [editing, setEditing] = useState(false);
  const [testCases, setTestCases] = useState(JSON.parse(sessionStorage.getItem('problemTestCases')));
  const [checkboxStates, setCheckboxStates] = useState([]);


  useEffect(() => {
    const storedTestCases = JSON.parse(sessionStorage.getItem('problemTestCases'));
    if (storedTestCases) {
      setTestCases(storedTestCases);
      setCheckboxStates(new Array(testCases.length).fill(false));
    }
  }, []);

  const onSave = (value) => {
    sessionStorage.setItem('custom_testcase',value);
    setEditing(false);
  };
  
  useEffect(()=>{
    if(testCases && testCases.length > 0){
      setCheckboxStates(new Array(testCases.length).fill(false));
    }
  },[testCases]);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  if (!testCases || testCases.length === 0) {
    return <></>
  }

  return (
    <div className="custom-input pt-4 p-2 flex flex-col  gap-4 h-full w-full whitespace-pre overflow-auto rounded-md">
      {sessionStorage.getItem('custom_testcase')  ? 
      (
        
        <div className="flex items-center">
        <pre>
          <EdiText
            value={sessionStorage.getItem('custom_testcase') || ""}
            onSave={onSave}
            canEdit={true}
            type='textarea'
            containerProps={{
              width:"100%"
            }}
            editButtonProps={{
              style: {
                borderRadius: 3,
                padding: '5px',
                width: '100%',
                background: '#15314B',
                color: 'green',
                height:"100%"
              },
            }}
            viewProps={{
              className: 'text-md',
              style: {
                display:"flex",
                flexGrow:1,
                fontWeight: 'bold',
                borderRadius: 3,
                padding: '10px',
                minWidth: '100%',
                background: '#15314B',
                color: 'green',
                whiteSpace: 'pre',
                letterSpacing:"0px",
              },
            }}
            editProps={{
              style: {
                display:"flex",
                flexGrow:1,
                borderRadius: 3,
                padding: '5px',
                width: '100%',
                background: '#15314B',
                whiteSpace: 'pre-wrap',
                minWidth:"400px"
              },
            }}
            inputProps={{ style: { whiteSpace: 'pre-wrap', color:'white',minWidth:"400px"} }}
          />
        </pre>
        </div>
      ) : (
        <></>
      )}

      {testCases.map((data, index) => (
        
        <div className="flex items-center" key={index}>
          {
            data ? (
            <SyntaxHighlighter language="javascript" wrapLongLines={true}  customStyle={{borderRadius:"8px",fontSize:"16px",width:"100%",paddingLeft:"10px"}} style={tomorrowNightBlue}>
              {`\n${data} \n `}
            </SyntaxHighlighter>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomInput;
