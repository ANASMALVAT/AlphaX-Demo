import React,{useState,useEffect} from "react";
import CustomInput from "./customInput";
import ConsoleButton from "../buttons/consoleButtons";
import CodeProblem from "./codeProblem";
import AlphaGPTWindow from "../alpha-gpt/alphaGptWindow";
import CodeSolution from "./codeSolution";
import { useSelector } from "react-redux";

import "./styles/consoleInput.css";



const ConsoleInput = () =>{

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
        setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const alphaConsole = useSelector((state) => state.alphaConsole.consoleState);

    return (
        <div style={{height:height - 5}} className=" main-console overflow-auto  flex-grow  p-2  border border-gray-700 border-b-none  bg-algoblack rounded-md">
            
            <div className="console-button flex  gap-1 h-12">
                <ConsoleButton />
            </div>

            <div className="flex-grow overflow-auto h-full mt-2 border-t border-gray-600  p-2 pb-0 ">
                {alphaConsole.isProblem && <CodeProblem />}
                {alphaConsole.isInput   && <CustomInput  /> }
                {alphaConsole.isAlphaGPT && <AlphaGPTWindow  /> }
                {alphaConsole.isSolution && <CodeSolution/> }
            </div>
        </div>
    );
}

export default ConsoleInput;