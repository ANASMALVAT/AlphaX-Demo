import React, {useState,useEffect}from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ConsoleSlidingPane from "../sliding-panel/consoleSlidingPane";
import ConsoleDropDown from "../drop-downs/consoleDropDown";
import { useDispatch , useSelector} from "react-redux";
import { setAlpha,setInput,setProblem,setSolution } from "../../../../redux/slices/alphaConsole";
import "./styles/consoleButton.css"

const ConsoleButton = ({}) => {

    const [consolePane,setConsolePane] = useState(false);
    const alphaConsole = useSelector((state) => state.alphaConsole.consoleState);
    const dispatch = useDispatch();

    const setConsoleSolution = () => {
        dispatch(setSolution());
    }

    const setConsoleProblem = () => {
        dispatch(setProblem());
    }

    const setConsoleInput = () => {
        dispatch(setInput());
    }
    
    const setConsoleAlpha = () => {
        dispatch(setAlpha());
    }

    const openConsolePane = () => {
        setConsolePane(true);
    }
    
    const closeConsolePane = () => {
        setConsolePane(false);
    }

    return (
        <div className=" flex w-full  justify-between ">
            < ConsoleSlidingPane isOpen={consolePane} onRequestClose={closeConsolePane} />

            <div className="flex gap-2 console-buttons  ">
                <button
                    onClick={setConsoleProblem}
                    className={` border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full font-mono text-sm font-normal text-white
                    ${alphaConsole.isProblem ? 'bg-[#1E2663]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <span className="font-normal font-resize">Problem</span>
                </button>

                <button
                    onClick={setConsoleInput}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${alphaConsole.isInput ? 'bg-[#1E2663]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">Test Cases</pre>
                </button>

                <button
                    onClick={setConsoleAlpha}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${alphaConsole.isAlphaGPT ? 'bg-[#1E2663]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">AlphaGPT</pre>
                </button>

                <button
                    onClick={setConsoleSolution}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${alphaConsole.isSolution ? 'bg-[#1E2663]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                    >
                    <pre className="font-normal font-resize">Solution</pre>
                </button>
            </div>
            <div className="flex gap-1 console-dropdown">
                <ConsoleDropDown/>
            </div>
            <button
                onClick={openConsolePane}
                className={` side-menu-console border ml-auto border-zinc-700  items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                sm:text-sm lg:text-md xl:text-md`}
            >
                <MenuIcon sx={{fontSize:'28px'}}/>
            </button>
        </div>
    )
}

export default ConsoleButton;