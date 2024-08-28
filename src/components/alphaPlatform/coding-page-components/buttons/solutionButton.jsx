import React, {useState,useEffect}from "react";
import { useDispatch , useSelector} from "react-redux";
import { setJava,setCPP,setPython,setJavascript } from "../../../../redux/slices/solutionSlice";
import "./styles/consoleButton.css"

const SolutionButton = () => {

    const [consolePane,setConsolePane] = useState(false);
    const alphaSolution = useSelector((state) => state.solutionLanguage.solutionState);

    const dispatch = useDispatch();

 

    const setSolutionJava = () => {
        dispatch(setJava());
    }

    const setSolutionCPP = () => {
        dispatch(setCPP());
    }

    const setSolutionPython = () => {
        dispatch(setPython());
    }
    
    const setSolutionJavascript = () => {
        dispatch(setJavascript());
    }


    return (
        <>
            <div className="flex flex-wrap gap-2 console-buttons h-10 ">
                
                <button
                    onClick={setSolutionJavascript}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${alphaSolution.javascript ? 'bg-algoXcolor' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                    >
                    <pre className="font-normal font-resize">JavaScript</pre>
                </button>

                <button
                    onClick={setSolutionPython}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${alphaSolution.python ? 'bg-algoXcolor' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">Python</pre>
                </button>

                <button
                    onClick={setSolutionJava}
                    className={` border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full font-mono text-sm font-normal text-white
                    ${alphaSolution.java ? 'bg-algoXcolor' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <span className="font-normal font-resize">Java</span>
                </button>

                <button
                    onClick={setSolutionCPP}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${alphaSolution.cpp ? 'bg-algoXcolor' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">C++</pre>
                </button>


            </div>
        </>
    )
}

export default SolutionButton;