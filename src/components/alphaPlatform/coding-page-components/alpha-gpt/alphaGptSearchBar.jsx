import React from 'react';
import { useState} from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { loading_image } from '../../../../utils/constants';

import "./styles/alphaGptSearchBar.css";


export default function AlphaGPTSearchBar({sendRequest, loading}) {

  const [userInput, setUserInput] = useState(``);

  const handleUserInput = (value) => 
  {
    setUserInput(value);
  }

  return (

      <Paper
          component="form"
          sx={{ display: 'flex', background:'#00182D', borderRight:'1px solid white', alignItems: 'center', height:"60px", width: '100%' }}
        >
        <textarea 
          className=' flex items-center text-area font-mono text-[1.2rem] bg-transparent w-full rounded-[0.25rem] h-12 border border-gray-500 text-white' 
          placeholder='AlphaGPT' 
          onChange={(event) => {handleUserInput(event.target.value)}}
          value={userInput}
        >
        </textarea>
        
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton disabled = {loading} className='flex' color="primary" sx={{ p: '5px'}} aria-label="directions" onClick={ () => { sendRequest(userInput); setUserInput(""); } }>
          { 
          loading ? 
          (
                <div className='h-11 w-11 flex justify-center items-start'>
                    <img className='animate-spin ' style={{ animationDuration: '1s' }} src={loading_image}></img>
                </div>
          )
          : <SendIcon  sx={{color:"white", fontWeight:"bold",fontSize:"30px"}} />
          }
        </IconButton>
      </Paper>
  );
}