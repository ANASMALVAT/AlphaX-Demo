import React from 'react'
import { setDifferentEditor,setConsole } from "../../../../redux/slices/alphaPlatformSlice";
import LanguageDropDown from '../drop-downs/languageDropDown';

import { useDispatch } from "react-redux";

const ConsoleSlidingPaneOptions = () => {

    const dispatch = useDispatch();
 

    const openEditor = () => 
        {
            dispatch(setDifferentEditor({ editor: true, console: false}))
        };

    const openConsole = () => 
        {
            dispatch(setConsole({ editor: false, console: true}))
        };

    return (
        <>
           <div className="bg-algoblack flex flex-col  justify-center items-center w-full p-4">
                <div> 
                    <button onClick={openEditor} className={` mb-4 bg-[#4C5ADF] overflow-hidden w-44 rounded-[0.25rem]   flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center  text-white hover:opacity-100 opacity-80`}>
                       <span className=' text-[16px]'> Editor</span>
                    </button>
                </div>
                <div>
                    <button onClick={openConsole} className={`mb-4 bg-[#4C5ADF] overflow-hidden w-44 rounded-[0.25rem]   flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center  text-white hover:opacity-100 opacity-80`}>
                        <span className=' text-[16px]'> Console</span>
                    </button>
                </div>
                <LanguageDropDown/>
            </div>
        </>
    )
}

export default ConsoleSlidingPaneOptions;