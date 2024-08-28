import React, { useEffect, useState } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import ConsoleRunButtons from '../buttons/consoleRunButtons';
import { code_divider_constant } from '../../../../utils/constants';
import { toast } from 'react-toastify';
import "./styles/codeOutput.css";

const CodeOutput = ( { outputDetail ,runCode} ) => 
{
    let errorId = outputDetail?.status_id;
    const [codeOutput, setCodeOutput] = useState([]);
    const CODE_DIVIDER_CONSTANT = code_divider_constant;

    const codeEncode = () => {

        switch(errorId)
        {
            case 3:{
                return atob(outputDetail?.stdout);
            }
            case 5:{
                return `Time Limit Exceed`
            }
            case 6:{
                return atob(outputDetail?.compile_output)
            }
                
            default:{
                return atob(outputDetail?.stderr)
            }
        }
    }

    useEffect(() => {
        if(outputDetail){
            const decodedCode = codeEncode(outputDetail || "");
            let decodedCodeParts = decodedCode.split(CODE_DIVIDER_CONSTANT);
            decodedCodeParts = decodedCodeParts.map(part => part.trim());
            setCodeOutput(decodedCodeParts);
            console.log(codeOutput);
        }
    },[outputDetail])




    return (
        <>
        <div className=' code-output flex flex-col h-full w-full gap-2 flex-grow '>
            <div className= 'code-output text-start   flex-col w-full h-full overflow-auto max-h-screen  border-b border-gray-700 flex flex-1  text-gray-300 font-normal text-2xl p-2 pl-4'>
                <div className=' mb-4'>
                    { 
                    codeOutput?.[0] &&
                    <div className=' flex  flex-col gap-2 w-full bg-algoblack rounded-md p-2  mb-2'>
                        <span className=' text-lg px-2  w-48 rounded-[0.25rem] py-1 text-gray-300'>Output </span>
                        <div className=' text-lg rounded-md  border border-gray-700  '>
                            <CodeBlock   text = {codeOutput[0]} language='c++' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}   codeBlockStyle={{padding:"0px"}} />
                        </div>
                    </div>

                    }

                    { 
                    codeOutput?.[1] &&
                    <div className=' flex  flex-col gap-2 w-full bg-algoblack rounded-md p-2 mb-2 '>
                        <span className=' text-lg px-2  w-48 rounded-[0.25rem] py-1 text-gray-300'> Expected </span>
                        <div className=' text-lg rounded-md  border border-gray-700  '>
                            <CodeBlock   text = {codeOutput[1]} language='c++' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}   codeBlockStyle={{padding:"0px"}} />
                        </div>
                    </div>
                    }

                    { 
                    codeOutput?.[2] &&
                    <div className=' flex  flex-col gap-2 w-full bg-algoblack rounded-md p-2 mb-2 '>
                        <span className=' text-lg px-2  w-40 rounded-[0.25rem] py-1 text-gray-300'>Input </span>
                        <div className=' text-lg rounded-md  border border-gray-700  '>
                            <CodeBlock   text = {codeOutput[2]} language='c++' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}   codeBlockStyle={{padding:"0px"}} />
                        </div>
                    </div>
                    }

                    </div>
                <div className='flex flex-col '>
                    {
                        outputDetail?.memory  && 
                        <div className=' flex  flex-col gap-2 text-lg w-full bg-algoblack rounded-md p-2 mb-2 '>
                            <span className=' text-lg px-2  w-40   rounded-[0.25rem] py-1 text-gray-300'> Memory usage </span>
                            <div className=' text-lg rounded-md  border border-gray-700 '>
                                <CodeBlock   text = {`${outputDetail?.memory} KB`} language='c++' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}   codeBlockStyle={{padding:"0px"}} />
                            </div>
                        </div>
                    }
                    {
                        outputDetail?.time  && 
                        <div className=' flex  flex-col gap-2  text-lg w-full bg-algoblack rounded-md p-2 mb-2 '>
                            <span className=' text-lg px-2  w-40   rounded-[0.25rem] py-1 text-gray-300'> Execution time </span>
                            <div className=' text-lg rounded-md  border border-gray-700  '>
                                <CodeBlock   text = {`${outputDetail?.time} sec`} language='c++' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}   codeBlockStyle={{padding:"0px"}} />
                            </div>
                        </div>
                    }
                </div>
                <div className='flex gap-3  '>
                    
                </div>
            </div>
            <div className='ml-4 flex  items-center'>
                <ConsoleRunButtons runCode={runCode}/>
            </div>
        </div>
        </>
    )
}

export default CodeOutput;