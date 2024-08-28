import React from "react";
import Typewriter from 'typewriter-effect';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import "./alphaGptWindow.css"

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

const AlphaGptWindow = () => 
{

    const displayString = [`I am AlphaGPT, an AI coding assistant developed by OpenAI. I am here to assist with coding-related questions, helping with syntax, logic, debugging, and algorithmic problems. I provide concise and brief answers to help you with your coding tasks.`];
 
    return (
        <>
        <div style={{  whiteSpace: 'pre', scrollbarWidth: 'thin', scrollbarColor: '#4C5ADF #011627', fontFamily: 'monospace',  fontSize: '14px',fontColor: 'rgb(55,65,81)'}}
            className="alpha-screen mt-10  custom-scrollbar   w-full h-[400px] p-2  border text-white rounded-[0.50rem] shadow-md  border-gray-700 bg-[#0C1326] text-left overflow-auto">

                <div className=" h-[80%] border border-gray-700 rounded-md p-1">
                    <pre className="m-auto text-gray-300 whitespace-pre-wrap text-left w-[full] pl-3 pr-3 border-gray-800 ml-auto mr-auto mt-4">
                        <Typewriter
                            options={{
                                strings:displayString,
                                autoStart:true,
                                delay:4 ,
                                deleteSpeed:2,
                                loop:true
                            }}
                        />
                    </pre>
                </div>
                <div className="flex mt-2">
                    <Paper component="form" sx={{ display: 'flex', background:'transparent', borderRight:'1px solid white', alignItems: 'center', height:"60px", width: '100%' }} >
                        <textarea
                            className=' flex items-center text-area font-mono text-[1.2rem] bg-transparent w-full rounded-[0.25rem] h-14 border border-gray-500 text-white' 
                            placeholder='AlphaGPT'
                        >
                        </textarea>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton className='flex' color="primary" sx={{ p: '5px'}} aria-label="directions" >
                            {
                            <SendIcon  sx={{color:"white", fontWeight:"bold",fontSize:"30px"}} />
                            }
                        </IconButton>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default AlphaGptWindow;