import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const OutputWindowButtons = ({makePartialWindow,makeFullWindow,closeWindow}) => {
    return <>
        <div className=" flex gap-4 ml-4 mb-1">
            <button className=' hover:scale-110 transition-all duration-50' onClick={makePartialWindow} ><CloseFullscreenIcon fontSize='small' sx={{color:"white"}} /></button>
            <button className=' hover:scale-125 transition-all duration-100' onClick={makeFullWindow} ><FullscreenIcon sx={{color:"white"}} /></button>
            <button className=' hover:scale-125 transition-all duration-100' onClick={closeWindow} ><ClearIcon sx={{color:"white"}} /></button>
        </div>
    </>
}

export default OutputWindowButtons;