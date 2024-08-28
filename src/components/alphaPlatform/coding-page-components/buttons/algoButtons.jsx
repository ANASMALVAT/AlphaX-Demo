import React from "react";
import { useDispatch } from "react-redux";
import { setDifferentEditor,setConsole } from "../../../../redux/slices/alphaPlatformSlice";


const AlgoButtons = ({buttonOne,buttonTwo }) => {

  const dispatch = useDispatch();

  const openEditor = () => 
      {
          dispatch(setDifferentEditor({ editor: true, isConsoleGpt: false}))
      };

  const openConsole = () => 
      {
          dispatch(setConsole({ editor: false, isConsoleGpt: true}))
      };


    return (
        <>
        <div className="flex flex-row ">
              <button onClick={openEditor} className={` overflow-hidden w-24 rounded-sm  mr-2 flex flex-row items-center px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white  hover:border-[#4C5ADF]`}>
                {buttonOne}
              </button>
              <button onClick={openConsole}  className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                {buttonTwo}
              </button>
        </div>
        </>
    )
}

export default AlgoButtons;