import React , {useState} from 'react';
import  Select  from 'react-select';
import { consoleOptions } from '../../../../data/consoleOptions';
import { setProblem,setAlpha,setInput,setSolution } from '../../../../redux/slices/alphaConsole';
import { customStyles } from './styles/customCss';
import { useDispatch } from 'react-redux';
import './styles/dropdown.css';


const ConsoleDropDown = () => 
{

    const dispatch = useDispatch();
    const [consoleValue, setConsoleValue] = useState("Problem");
   
    const changeConsole = (selectedOption) => {
        switch(selectedOption.value){
            case "Problem":
                dispatch(setProblem());
                break;
            case "Solution":
                dispatch(setSolution());
                break;
            case "AlphaGPT":
                dispatch(setAlpha());
                break;
            case "Test Cases":
                dispatch(setInput());
                break;
            default:
                dispatch(setProblem());
        }
        setConsoleValue(selectedOption.value);
    }
    
    return(
        <div className=' mr-1 '>
            <Select
                options={consoleOptions}
                styles={customStyles}
                onChange={(selectedOption) => changeConsole(selectedOption)}
                value={{label:consoleValue}}
                defaultValue={"16px"}
                isSearchable={false}
            />
        </div>
    )
}
export default ConsoleDropDown;